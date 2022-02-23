module.exports = {
    chainWebpack: config => {
      config.module
        .rule('vue')
        .use('vue-loader')
        .tap(options => {
          options.compilerOptions = {
            ...options.compilerOptions,
            isCustomElement: tag => {
                switch (tag) {
                  case "minesweeper-game":
                  case "ios-calculator":
                    return true;
                  default:
                    return false;
                }
            }
          }
          return options
        })
    }
  }