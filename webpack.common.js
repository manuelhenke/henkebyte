const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
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
                /node_modules/
            ]
        },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(['public']),
        new VueLoaderPlugin()
    ]
};