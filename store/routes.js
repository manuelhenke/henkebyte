/**
 * @typedef Route
 * @type {object}
 * @property {string} to Relative to to the page.
 * @property {string} name Name of the page.
 */

/**
 * @module
 * @type {Record<string, Route>} Static route object containing all routes as flat structure
 */
export default {
  HOME: {
    to: '/',
    name: 'Home',
  },
  ABOUT_ME: {
    to: '/about-me',
    name: 'About Me',
  },
  RESOURCES_OVERVIEW: {
    to: '/resources-overview',
    name: 'Resources Overview',
  },
  HENKEBYTE_WEBSITE: {
    to: '/henkebyte-website',
    name: 'Henkebyte Website',
  },
  IOS_CALCULATOR: {
    to: '/ios-calculator',
    name: 'iOS-Calculator',
  },
  MINESWEEPER: {
    to: '/minesweeper',
    name: 'Minesweeper',
  },
}
