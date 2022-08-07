module.exports = {
  root: true,
  env: {
    browser: true,
    'jest/globals': true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    'airbnb-base',
    '@nuxtjs',
    'plugin:jest/recommended',
    'plugin:nuxt/recommended',
    'plugin:sonarjs/recommended',
    'prettier',
  ],
  ignorePatterns: ['.forestry/**/*', 'static/admin/**/*'],
  plugins: ['sonarjs'],
  // add your custom rules here
  rules: {
    'import/extensions': [
      'error',
      {
        js: 'never',
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
  },
};
