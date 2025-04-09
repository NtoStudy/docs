const sidebar = {
    "/views/mockjs/": [
        { text: "目录", link: "/views/mockjs/index.md" },
        {
          text: "基础",
          items: [
            {
                text: "Vue3中直接使用",
                link: "/views/mockjs/modules/Vue3项目中配置Mock模拟数据.md",
                collapsable: false,
            },
          ],
        },
        {
          text: "进阶",
          items: [
            {
              text: "Koa+Mockjs搭建Mock服务",
              link: "/views/mockjs/modules/Koa+Mockjs搭建一个Mock服务.md",
              collapsed: true,
            },
          ],
        },
      ],
    "/views/ssr/": [
        {text: "目录", link: "/views/ssr/index.md"},
        {
            text: "next",
            items: []
        },
        {
            text: "nuxt",
            items: []
        },
    ],
    "/views/nest/": [
        {text: "目录", link: "/views/nest/index.md"},
        {
            text: "项目",
            items: [
                {
                    text: "一刻问卷",
                    link: "/views/nest/项目/一刻问卷.md",
                }
            ]
        },
        {
            text: "语法",
            items: []
        }
    ]
};
export default sidebar;
