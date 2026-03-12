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
          { text: 'Daily Report', link: '/2026/03/08/' },
          { text: 'Meeting 001: Mission', link: '/2026/03/08/meeting-001-mission' },
          { text: 'Meeting 002: Structure', link: '/2026/03/08/meeting-002-structure' },
          { text: 'Meeting 003: Planning', link: '/2026/03/08/meeting-003-planning' },
          { text: 'Meeting 004: Planning', link: '/2026/03/08/meeting-004-planning' },
        ],
      },
      {
        text: '2026-03-09',
        collapsed: true,
        items: [
          { text: 'Daily Report', link: '/2026/03/09/' },
          { text: 'Meeting 001: Morning Standup', link: '/2026/03/09/meeting-001-morning-standup' },
        ],
      },
      {
        text: '2026-03-10',
        collapsed: true,
        items: [
          { text: 'Daily Report', link: '/2026/03/10/' },
          { text: 'Meeting 001: Morning Standup', link: '/2026/03/10/meeting-001-morning-standup' },
        ],
      },
      {
        text: '2026-03-11',
        collapsed: true,
        items: [
          { text: 'Daily Report', link: '/2026/03/11/' },
          { text: 'Meeting 001: Morning Standup', link: '/2026/03/11/meeting-001-morning-standup' },
          { text: 'Meeting 002: Planning', link: '/2026/03/11/meeting-002-planning' },
          { text: 'Meeting 003: Planning', link: '/2026/03/11/meeting-003-planning' },
          { text: 'Meeting 004: Planning', link: '/2026/03/11/meeting-004-planning' },
        ],
      },
      {
        text: '2026-03-12',
        collapsed: true,
        items: [
          { text: 'Daily Report', link: '/2026/03/12/' },
          { text: 'Meeting 001: Light Game', link: '/2026/03/12/meeting-001-light-game' },
        ],
      },
    ],
  },
]

export const sidebarProjects: DefaultTheme.SidebarItem[] = [
  {
    text: 'Projects',
    items: [
      { text: 'Overview', link: '/projects/' },
      { text: 'Grid Tactics', link: '/projects/grid-tactics/' },
    ],
  },
]

export const sidebarHistory: DefaultTheme.SidebarItem[] = [
  {
    text: 'History',
    items: [
      { text: 'Changelog', link: '/history/' },
    ],
  },
]

export const sidebarAbout: DefaultTheme.SidebarItem[] = [
  {
    text: 'About',
    items: [
      { text: 'Overview', link: '/about/' },
      { text: 'Company Structure', link: '/about/company-structure' },
    ],
  },
]

export const sidebar: DefaultTheme.Sidebar = {
  '/2026/': [{ text: '2026', items: sidebar2026 }],
  '/about/': [{ text: 'About', items: sidebarAbout }],
  '/projects/': sidebarProjects,
  '/history/': sidebarHistory,
}
