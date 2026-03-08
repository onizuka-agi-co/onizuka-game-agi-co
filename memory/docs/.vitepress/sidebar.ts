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

export const sidebarMeetings: DefaultTheme.SidebarItem[] = [
  {
    text: 'Meetings',
    link: '/meetings/',
  },
  {
    text: '2026',
    collapsed: false,
    items: [
      {
        text: 'March',
        items: [
          { text: '2026-03-08 ミッション策定', link: '/meetings/2026-03-08-mission' }
        ]
      }
    ]
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
  '/meetings/': [{ text: '会議記録', items: sidebarMeetings }],
  '/history/': [{ text: '履歴', items: sidebarHistory }]
}
