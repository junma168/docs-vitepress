import { defineConfig } from 'vitepress'
import nav from './nav.mjs'
import sidebar from './sidebar.mjs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/docs-vitepress/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  title: "我的学习笔记",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle:"目录",
    outline:[1,6],
    logo: '/lgo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: sidebar,
     
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
    lastUpdated: {
      text: '更新时间',
      formatOptions: {
          dateStyle: 'full',
          timeStyle: 'medium'
      }
    },
    footer:{
      copyright:"Copyright@ 2025 Albert weiGuang"
    },
        // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    }
    
  },
  //数学公式支持
  markdown: {
      math: true
  },
srcDir: './docs',
lastUpdated: true
})
