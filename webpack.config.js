const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/js/index',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].chunk.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.less'],
        alias: {
            'appRoot': path.join(__dirname, 'src/js')
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src/js'),
                use: ['babel-loader', 'eslint-loader']
            }
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