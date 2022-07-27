import { getRoutes, mapRoutes } from './util/routesUtils'

const buildDescription = (target) =>
  `A showcase ${target} for different open source web projects including an iOS-Calculator and Minesweeper.`

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // server: {
  //   // To make the application available in the local network
  //   host: '0.0.0.0',
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  // Test meta config here: https://www.opengraph.xyz/
  head: {
    // Recommended length: 60 characters
    title: 'HenkeByte',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'index, follow' },
      {
        hid: 'description',
        name: 'description',
        property: 'og:description',
        // Recommended length: 155 - 160 characters
        content: buildDescription('website'),
      },
      {
        hid: 'title',
        name: 'title',
        property: 'og:title',
        content: 'HenkeByte',
      },
      // This doesn't work along well with the theme selection inside the web app
      // TODO: set theme-color dynamic based on the selected theme
      /* {
        hid: 'theme-color-light',
        name: 'theme-color',
        media: '(prefers-color-scheme: light)',
        content: '#55df82',
      },
      {
        hid: 'theme-color-dark',
        name: 'theme-color',
        media: '(prefers-color-scheme: dark)',
        content: '#000000',
      }, */
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-touch-icon.png?v=1',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png?v=1',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png?v=1',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg?v=1',
        color: '#55df82',
      },
      { rel: 'shortcut icon', href: '/favicon.ico?v=1' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss',
    '@/assets/css/light-theme.scss',
    '@/assets/css/dark-theme.scss',
    '@/assets/css/sepia-theme.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/bootstrap.js',
      mode: 'client',
    },
    {
      src: '@/plugins/contentful.js',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://content.nuxtjs.org/
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: 'HenkeByte',
      author: 'Manuel Henke',
      lang: 'en',
      ogHost: 'https://henkebyte.com',
      ogImage: {
        // Recommended dimension: 1200 x 630
        path: '/preview.png',
        width: 1200,
        height: 630,
        type: 'image/png',
      },
      twitterCard: 'summary_large_image',
      twitterSite: '@Manuel61296',
      twitterCreator: '@Manuel61296',
    },
    manifest: {
      name: 'HenkeByte',
      short_name: 'HenkeByte',
      description: buildDescription('PWA'),
      background_color: '#55df82',
      // theme_color: '#55df82',
      lang: 'en',
    },
  },

  // Router Configuration: https://nuxtjs.org/docs/configuration-glossary/configuration-router
  router: {
    trailingSlash: false,
    middleware: 'trailingSlashRedirect',
    linkActiveClass: 'child-active',
    linkExactActiveClass: 'active',
  },

  // Sitemap Configuration: https://sitemap.nuxtjs.org/guide/configuration
  sitemap: {
    hostname: 'https://henkebyte.com',
    gzip: true,
    exclude: ['/secret', '/admin/**', '/_nuxt/**'],
    routes: getRoutes,
    filter: mapRoutes,
  },

  // Robots Configuration: https://github.com/nuxt-community/robots-module
  robots: {
    Sitemap: 'https://henkebyte.com/sitemap.xml',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['@nuxtjs/color-mode'],
    postcss: {
      plugins: [],
    },
  },

  // Loading Configuration: https://nuxtjs.org/docs/features/loading/
  loading: {
    color: '#139187',
  },

  // https://color-mode.nuxtjs.org/
  colorMode: {
    fallback: 'light',
  },
}
