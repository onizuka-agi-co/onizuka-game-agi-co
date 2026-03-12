import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { DefaultTheme } from 'vitepress'

const docsRoot = fileURLToPath(new URL('..', import.meta.url))

const monthLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function readMarkdownTitle(filePath: string, fallback: string): string {
  if (!fs.existsSync(filePath)) {
    return fallback
  }

  const content = fs.readFileSync(filePath, 'utf8')
  const headingMatch = content.match(/^#\s+(.+)$/m)

  if (headingMatch?.[1]) {
    return headingMatch[1].trim()
  }

  const frontmatterTitleMatch = content.match(/^title:\s*["']?(.+?)["']?\s*$/m)
  if (frontmatterTitleMatch?.[1]) {
    return frontmatterTitleMatch[1].trim()
  }

  return fallback
}

function humanizeSlug(slug: string): string {
  return slug
    .replace(/\.md$/i, '')
    .split('-')
    .filter(Boolean)
    .map((part) => {
      if (/^\d+$/.test(part)) {
        return part
      }
      return part.charAt(0).toUpperCase() + part.slice(1)
    })
    .join(' ')
}

function monthLabel(month: string): string {
  const monthNumber = Number(month)
  if (monthNumber >= 1 && monthNumber <= 12) {
    return monthLabels[monthNumber - 1]
  }
  return month
}

function listDirectories(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) {
    return []
  }

  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b))
}

function listYearDirectories(): string[] {
  return listDirectories(docsRoot).filter((name) => /^\d{4}$/.test(name))
}

function listMarkdownFiles(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) {
    return []
  }

  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b))
}

function buildFlatSectionSidebar(sectionPath: string, routePrefix: string): DefaultTheme.SidebarItem[] {
  const absoluteSectionPath = path.join(docsRoot, sectionPath)
  const items: DefaultTheme.SidebarItem[] = [{ text: 'Overview', link: `${routePrefix}/` }]

  for (const fileName of listMarkdownFiles(absoluteSectionPath)) {
    if (fileName === 'index.md' || fileName.startsWith('_')) {
      continue
    }

    const filePath = path.join(absoluteSectionPath, fileName)
    const slug = fileName.replace(/\.md$/i, '')

    items.push({
      text: readMarkdownTitle(filePath, humanizeSlug(slug)),
      link: `${routePrefix}/${slug}`,
    })
  }

  for (const directoryName of listDirectories(absoluteSectionPath)) {
    if (directoryName.startsWith('_')) {
      continue
    }

    const indexPath = path.join(absoluteSectionPath, directoryName, 'index.md')
    if (!fs.existsSync(indexPath)) {
      continue
    }

    items.push({
      text: readMarkdownTitle(indexPath, humanizeSlug(directoryName)),
      link: `${routePrefix}/${directoryName}/`,
    })
  }

  return items
}

function buildYearSidebar(year: string): DefaultTheme.SidebarItem[] {
  const yearPath = path.join(docsRoot, year)
  const items: DefaultTheme.SidebarItem[] = [{ text: 'Overview', link: `/${year}/` }]

  for (const month of listDirectories(yearPath)) {
    const monthPath = path.join(yearPath, month)
    const monthItems: DefaultTheme.SidebarItem[] = []
    const monthIndexPath = path.join(monthPath, 'index.md')

    if (fs.existsSync(monthIndexPath)) {
      monthItems.push({
        text: 'Overview',
        link: `/${year}/${month}/`,
      })
    }

    for (const day of listDirectories(monthPath)) {
      const dayPath = path.join(monthPath, day)
      const dayIndexPath = path.join(dayPath, 'index.md')

      if (!fs.existsSync(dayIndexPath)) {
        continue
      }

      const dayItems: DefaultTheme.SidebarItem[] = [
        {
          text: 'Daily Report',
          link: `/${year}/${month}/${day}/`,
        },
      ]

      for (const fileName of listMarkdownFiles(dayPath)) {
        if (fileName === 'index.md' || fileName.startsWith('_')) {
          continue
        }

        const filePath = path.join(dayPath, fileName)
        const slug = fileName.replace(/\.md$/i, '')

        dayItems.push({
          text: readMarkdownTitle(filePath, humanizeSlug(slug)),
          link: `/${year}/${month}/${day}/${slug}`,
        })
      }

      monthItems.push({
        text: `${year}-${month}-${day}`,
        collapsed: false,
        items: dayItems,
      })
    }

    items.push({
      text: monthLabel(month),
      collapsed: false,
      items: monthItems,
    })
  }

  return items
}

export const yearDirectories = listYearDirectories()

export const sidebar: DefaultTheme.Sidebar = yearDirectories.reduce<DefaultTheme.Sidebar>(
  (acc, year) => {
    acc[`/${year}/`] = buildYearSidebar(year)
    return acc
  },
  {
    '/about/': buildFlatSectionSidebar('about', '/about'),
    '/projects/': buildFlatSectionSidebar('projects', '/projects'),
    '/history/': buildFlatSectionSidebar('history', '/history'),
    '/archive/': buildFlatSectionSidebar('archive', '/archive'),
  }
)
