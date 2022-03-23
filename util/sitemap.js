export async function getRoutes() {
  const { $content } = require('@nuxt/content')
  const files = await $content({ deep: true }).only(['path']).fetch()

  return files.map((file) => (file.path === '/index' ? '/' : file.path))
}

export function filterRoutes({ routes, options }) {
  // object containing [routeName]: [priority] pairs
  const priorities = {
    '/': 1,
    '/minesweeper': 0.8,
    '/ios-calculator': 0.7,
  }

  return routes.map((route) => {
    return {
      ...route,
      lastmod: new Date(),
      priority: priorities[route.url] || 0.5,
    }
  })
}
