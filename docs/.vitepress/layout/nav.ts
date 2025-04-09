const nav = [
  { text: "首页", link: "/" },
  { text: "开发导航", link: "/views/nav/" },
  {
    text: "前端开发",
    items: [
      {
        text: "tailwindcss 🦄",
        link: "/views/tailwindcss/tailwindcss.md",
      },
      {
        text: "css 🦄",
        link: "/views/css/css.md",
      },
      {
        text: "构建工具 🦄",
        link: "/views/build-tools/index.md",
      },
      {
        text: "SSR 🦄",
        link: "/views/ssr/index.md",
      },
      {
        text: "Mock.js 🦄",
        link: "/views/mockjs/index.md",
      }
    ],
  },
  {
    text: "后端开发",
    items: [
      {
        text: "Nest专栏 🦄",
        items: [
          {
            text: '一刻问卷服务端 🟠',
            link: '/views/nest/项目/一刻问卷.md'
          }
        ],
      },
    ],
  },
  {
    text: "组件库",
    items: [
      {
        text: "vue 🚀",
        link: "/views/vue/index.md",
      },
      {
        text: "react 🚀",
        link: "/views/react/index.md",
      },
    ],
  },
];

export default nav;
