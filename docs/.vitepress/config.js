import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Steven 的技术博客',
  description: '探索 AI 与深度学习的奥秘',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/articles' },
    ],

    sidebar: [
      {
        text: '文章',
        items: [
          { text: '所有文章', link: '/articles' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/stevenzhangdongyu' }
    ]
  }
})
