const { statSync } = require('fs')
const { resolve } = require('path')

export async function getRoutes() {
  const { $content } = require('@nuxt/content')
  const files = await $content({ deep: true }).only(['path']).fetch()
  return files.map((file) => (file.path === '/index' ? '/' : file.path))
}

export function mapRoutes({ routes, options }) {
  // object containing [routeName]: [priority] pairs
  const priorities = {
    '/': 1,
    '/henkebyte-website': 0.7,
    '/minesweeper': 0.6,
    '/ios-calculator': 0.6,
  }
  const mappedRoutes = []

  for (const route of routes) {
    let lastmod = new Date()
    try {
      const path =
        route.component ?? resolve(__dirname, '../content' + route.url + '.md')
      const stats = statSync(path)
      lastmod = stats.mtime
    } catch (error) {
      console.error(error)
    }
    mappedRoutes.push({
      ...route,
      lastmod,
      priority: priorities[route.url] || 0.5,
    })
  }

  return mappedRoutes
}
