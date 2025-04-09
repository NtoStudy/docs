import { onMounted, watch, nextTick, h } from "vue";
import { inBrowser, useRoute, useData } from "vitepress";
import { NProgress } from "nprogress-v2/dist/index.js";
import "nprogress-v2/dist/index.css";
import giscusTalk from "vitepress-plugin-comment-with-giscus";

import DefaultTheme from "vitepress/theme";
import MyLayout from "./components/MyLayout.vue";
import MNavLinks from "./components/MNavLinks.vue";
import Typewriter from "./components/Typewriter.vue";
import Video from "./components/Video.vue";
import mediumZoom from "medium-zoom";
import "./style/index.css";

export default {
  extends: DefaultTheme,
  Layout() {
    const props: Record<string, unknown> = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    return h(MyLayout, props);
  },
  enhanceApp({ app, router }: { app: any; router: any }) {
    app.component("MNavLinks", MNavLinks);
    app.component("Typewriter", Typewriter);
    app.component("VideoPlayer", Video)
    if (inBrowser) {
      NProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => {
        NProgress.start();
      };
      router.onAfterRouteChanged = () => {
        NProgress.done();
      };
    }
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    const { frontmatter } = useData();
    // giscus配置
    giscusTalk(
      {
        repo: "ZRMYDYCG/docs",
        repoId: "R_kgDON4Zgtw",
        category: "General",
        categoryId: "DIC_kwDON4Zgt84Cm5yW",
        mapping: "pathname",
        strict: "0",
        reactionsEnabled: "1",
        emitMetadata: "0",
        inputPosition: "bottom",
        theme: "purple_dark",
        lang: "zh-CN",
      },
      {
        frontmatter,
        route,
      },
      true
    );
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};
