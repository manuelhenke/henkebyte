const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  watch: true,
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    client: {
      overlay: true,
      progress: true,
    },
    historyApiFallback: true,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Dev - Henke Byte",
      filename: "index.html",
      template: "./src/template.html",
    }),
  ],
});
