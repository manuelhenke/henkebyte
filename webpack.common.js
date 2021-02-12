const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ProvidePlugin } = require('webpack');

module.exports = {
    entry: './src/main.js',
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
        new CopyWebpackPlugin([
            'public',
            'node_modules/minesweeper-for-web/dist/assets'
        ]),
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new VueLoaderPlugin()
    ]
};