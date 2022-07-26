module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:jest/recommended',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  ignorePatterns: ['.forestry/**/*', 'static/admin/**/*'],
  plugins: [],
  // add your custom rules here
  rules: {},
}
