import { defineConfig } from 'vitepress'
import { sidebar, yearDirectories } from './sidebar'

const yearNav = yearDirectories.map((year) => ({
  text: year,
  link: `/${year}/`,
}))

export default defineConfig({
  title: "ONIZUKA Memory",
  description: "Operating records, daily reports, and company memory for ONIZUKA Game AGI Co.",
  base: "/onizuka-game-agi-co/",
  head: [
    ['link', { rel: 'icon', href: '/memory-brand.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'apple-touch-icon', href: '/memory-brand.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['meta', { name: 'theme-color', content: '#10213a' }],
  ],
  themeConfig: {
    logo: '/memory-brand.svg',
    siteTitle: 'ONIZUKA Memory',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Archive', link: '/archive/' },
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
