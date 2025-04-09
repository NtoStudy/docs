import { defineConfig } from "vitepress";
import nav from "./layout/nav";
import sidebar from "./layout/sidebar";
import search from "./layout/search";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "池边哲学",
  description: "池边哲学，一个关于生活、工作、学习、思考的地方。",
  lang: "zh-CN",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/avatar.jpg",
    nav,
    sidebar,
    search,
    socialLinks: [
      { icon: "github", link: "https://github.com/NtoStudy" },
      { icon: "gitee", link: "https://gitee.com/ntostudy" },
      { icon: "twitter", link: "#" },
      { icon: "gmail", link: "#" },
    ],
    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 池边哲学`,
    },
    docFooter: {
      prev: "上一页 🌿",
      next: "下一页 🌿",
    },

    outline: {
      label: "页面导航",
      level: "deep",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
  sitemap: {
    hostname: "",
  },
  markdown: {
    lineNumbers: true,
    theme: {
      light: "one-light",
      dark: "one-dark-pro",
    },
  },
  outDir: "../dist",
});
