import { defineConfig } from 'vitepress'

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
    nav: [
      { text: '我的博客', link: 'https://junma.netlify.app/' },
      // { text: '示例', link: '/markdown-examples' }
      //下面这个家是有下拉选项的 没有下拉的看上边注释掉的那个
      // {text: '家', 
      //   items: [
      //     { text: '首页', link: '/' },
      //     { text: 'markdown示例', link: '/markdown-examples' }
      //   ]
      // },
      // { text: '示例', link: '/markdown-examples' },
      // { text: '自动生成侧边栏', link: '/front-end/react/' },
      // { text: '自动生成侧边栏2', link: '/backend/rabbitmq/' },
    ],

    sidebar: [
      { text: '主题简介', link: '/study/资料分析/index' },
      {
        text: '快速上手',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '资料分析-截位直除（一）', link: '/study/资料分析/资料分析-截位直除（一）' },
          { text: '资料分析-分数比较（二）', link: '/study/资料分析/资料分析-分数比较（二）' },
          { text: '资料分析-基期量（三）', link: '/study/资料分析/资料分析-基期量（三）' },
          { text: '资料分析-现期量（四）', link: '/study/资料分析/资料分析-现期量（四）' },
          { text: '资料分析-一般增长率（五）', link: '/study/资料分析/资料分析-一般增长率（五）' },
          { text: '资料分析-增长量（六）', link: '/study/资料分析/资料分析-增长量（六）' },
          { text: '资料分析-比较增长量（七）', link: '/study/资料分析/资料分析-比较增长量（七）' },
          { text: '资料分析-比重（八）', link: '/study/资料分析/资料分析-比重（八）' },
          { text: '资料分析-平均数（九）', link: '/study/资料分析/资料分析-平均数（九）' },
          { text: '资料分析-倍数（十）', link: '/study/资料分析/资料分析-倍数（十）' },
          
          // { text: '资料分析-特殊增长率（十一）', link: '/study/资料分析/资料分析-特殊增长率（十一）' }
         
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
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
  }
})
