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
            text: '日報',
            link: '/2026/03/08/',
          },
          {
            text: 'Meeting 001: ミッション策定',
            link: '/2026/03/08/meeting-001-mission',
          },
          {
            text: 'Meeting 002: 記録構造',
            link: '/2026/03/08/meeting-002-structure',
          }
        ]
      }
    ]
  }
]

export const sidebarProjects: DefaultTheme.SidebarItem[] = [
  {
    text: 'Projects',
    link: '/projects/',
  }
]

export const sidebarHistory: DefaultTheme.SidebarItem[] = [
  {
    text: 'Changelog',
    link: '/history/',
  }
]

export const sidebarAbout: DefaultTheme.SidebarItem[] = [
  {
    text: 'About',
    link: '/about/',
  }
]

export const sidebar: DefaultTheme.Sidebar = {
  '/2026/': [{ text: '2026', items: sidebar2026 }],
  '/about/': [{ text: 'About', items: sidebarAbout }],
  '/projects/': [{ text: 'Projects', items: sidebarProjects }],
  '/history/': [{ text: '履歴', items: sidebarHistory }]
}
