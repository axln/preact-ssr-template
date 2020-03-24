const path = require('path');
const webpack = require('webpack');
const externals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = (env, { mode }) => ({
    entry: './src/server/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    optimization: mode === 'production' ?
        {
            minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        } : {
            minimize: false
        },
    target: 'node',
    node: {
        __dirname: true
    },
    externals: [externals()],
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
                    //MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: mode === 'development',
            SERVER: true,
            CLIENT: false
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
});
