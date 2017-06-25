const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].chunk.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.less'],
        alias: {
            'appRoot': path.join(__dirname, 'src')
        }
    },

    module: {
        rules: [
            {test: /\.(js|jsx)$/, include: path.join(__dirname, 'src'), use: ['babel-loader', 'eslint-loader']},
            {test: /(\.css)$/, use: ['style-loader', 'css-loader']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    devServer: {
        historyApiFallback: true
    },

    devtool: "cheap-module-eval-source-map"
}