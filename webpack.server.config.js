const path = require('path');
const webpack = require('webpack');
const externals = require('webpack-node-externals');

module.exports = (env, argv) => ({
    entry: './src/server/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
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
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: argv.mode === 'development',
            SERVER: true,
            CLIENT: false
        })
    ]
});
