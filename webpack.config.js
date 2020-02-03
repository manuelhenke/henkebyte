const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        // this will apply to both plain `.js` files
        // AND `<script>` blocks in `.vue` files
        {
            test: /\.js$/,
            loader: 'babel-loader'
        },
        // this will apply to both plain `.css` files
        // AND `<style>` blocks in `.vue` files
        {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ],
            exclude: /node_modules/
        },
        // this will apply to both plain `.scss` files
        // AND `<style lang="scss">` blocks in `.vue` files
        {
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif|ico)$/,
            use: [
                'file-loader',
            ],
            exclude: [
                /node_modules/,
                /static/
            ]
        },
        ]
    },
    devServer: {
        contentBase: './dist',
        overlay: true,
        hot: true
    },
    plugins: [
        new CopyWebpackPlugin(['index.html']),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ]
};