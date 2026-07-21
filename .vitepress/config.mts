import { defineConfig } from 'vitepress'
import deduct from './languages/deduct'
import typeLang from './languages/type'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/deductrium-guide/' || '/',
  title: "Deductrium 攻略",
  description: "Deductrium 游戏攻略指南",
  srcExclude: ['**/.vitepress/dist/**'],
  markdown: {
    breaks: true,
    languages: [deduct, typeLang],
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '攻略章节',
        items: [
          { text: '第一章 命题逻辑', link: '/guide/chapter1' },
          { text: '第二章 一阶逻辑', link: '/guide/chapter2' },
          { text: '第三章 皮亚诺算术', link: '/guide/chapter3' },
          { text: '第四章 ZFC', link: '/guide/chapter4' },
          { text: '第五章 数系', link: '/guide/chapter5' },
          { text: '第六章 类型论', link: '/guide/chapter6' },
          { text: '第七章 W良基树', link: '/guide/chapter7' },
          { text: '第八章 同伦类型论', link: '/guide/chapter8' },
        ]
      },
      { text: '游戏链接', link: 'https://wxyhly.github.io/deductrium/' }
    ],

    sidebar: [
      {
        text: '攻略章节',
        items: [
          { text: '第一章 命题逻辑', link: '/guide/chapter1' },
          { text: '第二章 一阶逻辑', link: '/guide/chapter2' },
          { text: '第三章 皮亚诺算术', link: '/guide/chapter3' },
          { text: '第四章 ZFC', link: '/guide/chapter4' },
          { text: '第五章 数系', link: '/guide/chapter5' },
          { text: '第六章 类型论', link: '/guide/chapter6' },
          { text: '第七章 W良基树', link: '/guide/chapter7' },
          { text: '第八章 同伦类型论', link: '/guide/chapter8' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wxyhly/deductrium' }
    ]
  }
})