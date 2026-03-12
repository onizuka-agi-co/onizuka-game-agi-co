import { defineConfig } from 'vitepress'
import { sidebar, yearDirectories } from './sidebar'

const yearNav = yearDirectories.map((year) => ({
  text: year,
  link: `/${year}/`,
}))

export default defineConfig({
  title: "Memory",
  description: "Daily reports & memory - ONIZUKA Game AGI",
  base: "/onizuka-game-agi-co/",
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Projects', link: '/projects/' },
      ...yearNav,
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
