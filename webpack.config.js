const path = require('path');
const webpack = require('webpack');
// const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = (env, { mode }) => ({
    entry: './src/client/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    optimization: mode === 'production' ?
        {
            minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        } : {
            minimize: false
        },
    devtool: mode === 'development' ? 'inline-source-map' : false,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                resolve: {
                    extensions: ['.js', '.jsx']
                },
                loader: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            /*{
                test: /\.html$/,
                loader: 'raw-loader'
            }*/
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: mode === 'development',
            SERVER: false,
            CLIENT: true
        }),
        new MiniCssExtractPlugin({ filename: 'bundle.css'}),
        /*new htmlWebpackPlugin({
            template: './server/index.html',
            inject: 'head'
        })*/
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    }
});
