const { statSync } = require('fs');
const { resolve } = require('path');

export async function getRoutes() {
  // eslint-disable-next-line global-require
  const { $content } = require('@nuxt/content');
  const files = await $content({ deep: true }).only(['path']).fetch();
  return files.map((file) => (file.path === '/index' ? '/' : file.path));
}

/**
 * @function
 * @template T
 * @param {Object} param
 * @param {T[]} param.routes
 * @param {Object} param.options
 * @returns {(T & {lastmod: Date, priority: number})[]}
 */
export function mapRoutes({ routes, options }) {
  // object containing [routeName]: [priority] pairs
  const priorities = {
    '/': 1,
    '/henkebyte-website': 0.7,
    '/minesweeper': 0.6,
    '/ios-calculator': 0.6,
  };
  return routes.map((route) => {
    let lastmod = new Date();
    try {
      const path = route.component ?? resolve(__dirname, `../content${route.url}.md`);
      const stats = statSync(path);
      lastmod = stats.mtime;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
    return {
      ...route,
      lastmod,
      priority: priorities[route.url] || 0.5,
    };
  });
}
