[![CI](https://github.com/manuelhenke/henkebyte/actions/workflows/ci.yml/badge.svg)](https://github.com/manuelhenke/henkebyte/actions/workflows/ci.yml)
[![CD](https://github.com/manuelhenke/henkebyte/actions/workflows/cd.yml/badge.svg)](https://github.com/manuelhenke/henkebyte/actions/workflows/cd.yml)
[![CodeQL](https://github.com/manuelhenke/henkebyte/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/manuelhenke/henkebyte/actions/workflows/codeql-analysis.yml)
[![Website henkebyte.com](https://img.shields.io/website-up-down-green-red/https/henkebyte.com.svg)](https://henkebyte.com/)
[![License](https://img.shields.io/github/license/manuelhenke/henkebyte)](./LICENSE)

# HenkeByte

Website build with NuxtJS and hosted on [henkebyte.com](https://henkebyte.com).

## Build Setup

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build static project for production and launch server
$ yarn build
$ yarn start

```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

### Develop

```bash
# create symbolic link of bootstrap scss
$ ln -s node_modules/bootstrap/scss ln-bootstrap-scss
```

## Special Directories

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `content`

Store your content as Markdown, JSON, YAML or CSV files and fetch it through a MongoDB like API, acting as a Git-based Headless CMS.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/content).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `middleware`

The middleware directory contains your application middleware. Middleware lets you define custom functions that can be run before rendering either a page or a group of pages (layout).

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/middleware).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

## License

[MIT License](./LICENSE)
