const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { HotModuleReplacementPlugin } = require("webpack");
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
  ],
});
