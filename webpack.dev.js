const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        overlay: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Dev - Henke Byte',
            filename: "index.html",
            template: './src/template.html'
        }),
    ],
});