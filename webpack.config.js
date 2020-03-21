const path = require('path');
const webpack = require('webpack');
// const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
    entry: './src/client/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: argv.mode === 'development' ? 'inline-source-map' : false,
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
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: argv.mode === 'development',
            SERVER: false,
            CLIENT: true
        }),
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
