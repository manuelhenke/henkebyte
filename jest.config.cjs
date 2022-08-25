/** @type{import('jest').Config} */
module.exports = {
  preset: '@nuxt/test-utils',
  transformIgnorePatterns: ['/node_modules/(?!(@nuxtjs/color-mode)/)', '\\.pnp\\.[^\\/]+$'],
};
