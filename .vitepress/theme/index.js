// https://vitepress.dev/guide/custom-theme
import { h, ref, onMounted, watch } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: ({ frontmatter, page }) => {
    const isSidebarOpen = ref(true)

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value
      document.documentElement.classList.toggle('sidebar-closed', !isSidebarOpen.value)
      localStorage.setItem('sidebar-open', isSidebarOpen.value.toString())
    }

    onMounted(() => {
      // 初始化时检查本地存储的状态
      const savedState = localStorage.getItem('sidebar-open')
      if (savedState !== null) {
        isSidebarOpen.value = savedState === 'true'
      }
      document.documentElement.classList.toggle('sidebar-closed', !isSidebarOpen.value)
      
      // 添加图标到侧边栏菜单项
      addIconsToSidebar()
    })

    // 监听侧边栏状态变化
    watch(isSidebarOpen, () => {
      setTimeout(() => {
        addIconsToSidebar()
      }, 100)
    })

    // 添加图标到侧边栏菜单项
    const addIconsToSidebar = () => {
      if (typeof window === 'undefined') return
      
      // 等待 DOM 完全加载
      setTimeout(() => {
        const sidebarItems = document.querySelectorAll('.VPSidebar .VPNavItem')
        const icons = ['📊', '📝', '🔢', '🧩', '📚']
        
        console.log('侧边栏菜单项数量:', sidebarItems.length)
        
        sidebarItems.forEach((item, index) => {
          if (index < icons.length) {
            console.log('处理菜单项:', index, item.textContent.trim())
            
            // 检查是否已经添加了图标
            let iconElement = item.querySelector('.sidebar-icon')
            if (!iconElement) {
              // 创建图标元素
              iconElement = document.createElement('span')
              iconElement.className = 'sidebar-icon'
              iconElement.style.marginRight = '8px'
              iconElement.style.fontSize = '16px'
              
              // 找到链接元素
              const linkElement = item.querySelector('a')
              if (linkElement) {
                console.log('找到链接元素:', linkElement)
                linkElement.prepend(iconElement)
              }
            }
            
            // 设置图标
            if (iconElement) {
              iconElement.textContent = icons[index]
              console.log('设置图标:', icons[index])
            }
          }
        })
      }, 500)
    }

    // 检查当前路径是否为首页
    const isHomePage = () => {
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname
        return currentPath === '/' || currentPath === '/index.html'
      }
      return false
    }

    // 渲染折叠按钮，仅在非首页显示
    const renderToggleButton = () => {
      if (isHomePage()) {
        return null
      }
      
      return h('div', {
        class: 'sidebar-toggle-container'
      }, [
        h('button', {
          class: 'sidebar-toggle',
          onClick: toggleSidebar,
          ariaLabel: isSidebarOpen.value ? '关闭侧边栏' : '打开侧边栏'
        }, isSidebarOpen.value ? '←' : '→')
      ])
    }

    return h(DefaultTheme.Layout, { frontmatter, page }, {
      // 添加全局布局插槽
      'layout-top': renderToggleButton
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
