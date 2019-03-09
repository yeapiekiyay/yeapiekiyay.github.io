const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                // Create style nodes from JS strings in development. Extract CSS in production.
                isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader', // Translates CSS into CommonJS
                'sass-loader' // Compiles Sass to CSS using Node Sass
            ]
        }]
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css'
        })
    ]
};