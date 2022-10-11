/* eslint-disable import/no-extraneous-dependencies */
import { str } from 'nuxt-envalid';
import { getRoutes, mapRoutes } from './util/routes-utils.js';

const buildDescription = (target) =>
  `A showcase ${target} for different open source web projects including an iOS-Calculator and Minesweeper.`;

const HOST_NAME = process.env.HOST_NAME || 'https://henkebyte.com';
const BASE_PATH = process.env.BASE_PATH || '/';
const ROBOTS_META_CONTENT = process.env.ROBOTS_META_CONTENT || 'index,follow';

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
      // eslint-disable-next-line unicorn/text-encoding-identifier-case
      { charset: 'UTF-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: ROBOTS_META_CONTENT },
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
        href: `${BASE_PATH}apple-touch-icon.png?v=1`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `${BASE_PATH}favicon-32x32.png?v=1`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `${BASE_PATH}favicon-16x16.png?v=1`,
      },
      {
        rel: 'mask-icon',
        href: `${BASE_PATH}safari-pinned-tab.svg?v=1`,
        color: '#55df82',
      },
      { rel: 'shortcut icon', href: `${BASE_PATH}favicon.ico?v=1` },
    ],
    script: [{ src: `${BASE_PATH}decode-query-path.js` }],
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
    {
      src: '@//plugins/vuex-persist.js',
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
    // https://github.com/manuelhenke/nuxt-envalid
    'nuxt-envalid',
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
    baseURL: BASE_PATH,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: 'HenkeByte',
      author: 'Manuel Henke',
      lang: 'en',
      ogHost: HOST_NAME,
      ogImage: {
        // Recommended dimension: 1200 x 630
        path: `${BASE_PATH}preview.png`,
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
    base: BASE_PATH,
    trailingSlash: false,
    middleware: ['trailing-slash-redirect'],
    linkActiveClass: 'child-active',
    linkExactActiveClass: 'active',
  },

  // Sitemap Configuration: https://sitemap.nuxtjs.org/guide/configuration
  sitemap: {
    hostname: HOST_NAME,
    gzip: true,
    exclude: [`${BASE_PATH}secret`, `${BASE_PATH}admin/**`, `${BASE_PATH}_nuxt/**`],
    routes: getRoutes,
    filter: mapRoutes,
  },

  // Robots Configuration: https://github.com/nuxt-community/robots-module
  robots: {
    Sitemap: `${HOST_NAME}${BASE_PATH}sitemap.xml`,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['@nuxtjs/color-mode', 'fireworks-js'],
    postcss: {
      plugins: [],
    },
  },

  // Generate Configuration: https://nuxtjs.org/docs/configuration-glossary/configuration-generate/
  generate: {
    fallback: true,
  },

  // Loading Configuration: https://nuxtjs.org/docs/features/loading/
  loading: {
    color: '#139187',
  },

  // https://color-mode.nuxtjs.org/
  colorMode: {
    fallback: 'light',
  },

  envalid: {
    specs: {
      CTF_SPACE_ID: str(),
      CTF_CDA_ACCESS_TOKEN: str(),
      CTF_ENVIRONMENT: str({ default: '' }),
    },
  },
};
