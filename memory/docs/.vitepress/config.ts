import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'

export default defineConfig({
  title: "Memory",
  description: "Daily reports & memory - ONIZUKA Game AGI",
  base: "/onizuka-game-agi-co/",
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: '2026', link: '/2026/' }
    ],
    
    sidebar,
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/onizuka-agi-co/onizuka-game-agi-co' }
    ],
    
    search: {
      provider: 'local'
    }
  }
})
