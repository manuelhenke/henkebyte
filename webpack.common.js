const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const SitemapPlugin = require("sitemap-webpack-plugin").default;
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  node: false,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            isCustomElement: (tag) => {
              switch (tag) {
                case "minesweeper-game":
                case "ios-calculator":
                  return true;
                default:
                  return false;
              }
            },
          },
        },
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ["file-loader"],
        exclude: [/node_modules/],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: ["file-loader"],
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/template.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),
    new SitemapPlugin({
      base: "https://henkebyte.com",
      paths: [
        {
          path: "/",
          priority: 1,
        },
        {
          path: "/minesweeper",
          priority: 0.9,
        },
        {
          path: "/ios-calculator",
          priority: 0.8,
        },
      ],
      options: {
        filename: "sitemap.xml",
        lastmod: true,
        changefreq: "daily",
        priority: 0.5,
      },
    }),
  ],
};
