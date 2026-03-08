// Sidebar configuration for onizuka-game-agi-co memory
// Update manually or use a generator script

import type { DefaultTheme } from 'vitepress'

export const sidebar2026: DefaultTheme.SidebarItem[] = [
  {
    text: 'Overview',
    link: '/2026/',
  },
  {
    text: 'March',
    collapsed: false,
    items: [
      {
        text: '2026-03-08',
        collapsed: true,
        items: [
          {
            text: 'Overview',
            link: '/2026/03/08/',
          }
        ]
      }
    ]
  }
]

export const sidebar: DefaultTheme.Sidebar = {
  '/2026/': [{ text: '2026', items: sidebar2026 }]
}
