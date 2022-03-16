const buildDescription = (target) =>
  `A showcase ${target} for different open source web projects including an iOS-Calculator and Minesweeper.`

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

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
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.scss'],

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
      theme_color: '#55df82',
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
      lang: 'en',
    },
  },

  // Router Configuration: https://nuxtjs.org/docs/configuration-glossary/configuration-router
  router: {
    trailingSlash: false,
    middleware: 'trailingSlashRedirect',
  },

  // Sitemap Configuration: https://sitemap.nuxtjs.org/guide/configuration
  sitemap: {
    hostname: 'https://henkebyte.com',
    gzip: true,
    exclude: ['/secret', '/admin/**'],
    filter: ({ routes, options }) => {
      // object containing [routeName]: [priority] pairs
      const priorities = {
        index: 1,
        minesweeper: 0.8,
        calculator: 0.7,
      }
      return routes.map((route) => {
        return {
          ...route,
          lastmod: new Date(),
          priority: priorities[route.name] || 0.5,
        }
      })
    },
  },

  // Robots Configuration: https://github.com/nuxt-community/robots-module
  robots: {
    Sitemap: 'https://henkebyte.com/sitemap.xml',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Loading Configuration: https://nuxtjs.org/docs/features/loading/
  loading: {
    color: '#139187',
  },
}
