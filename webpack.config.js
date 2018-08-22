var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/client/app/');
var STYLE_DIR = path.resolve(__dirname, 'src/client/styles');
var IMAGE_DIR = path.resolve(__dirname, 'src/client/images');

var config = {
    cache:true,
    mode: 'development',  
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        APP_DIR + '/index.js',
        STYLE_DIR + '/main.scss'
    ],
    output: {
        devtoolLineToLine: true,
        sourceMapFilename: "src/client/app/bundle.js.map",
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        rules : [
          {
            test: /\.(jsx|js)?$/,
            exclude: /node_modules/,
            use: [{
            loader: "babel-loader"}
            ]
          },
          {
            test: /\.scss$/,
            include: STYLE_DIR,
            use: [{
                loader: 'style-loader' // creates style nodes from JS strings
              }, {
                loader: 'css-loader' // translates CSS into CommonJS
              }, {
                loader: 'sass-loader' // compiles sass to CSS
              }]
          },
        ],
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          hash: true,
          filename: 'index.html',
          template: path.resolve(__dirname, 'index.html'),
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "/styles/styles.css",
            chunkFilename: false
          })
      ],
      devServer: {
        historyApiFallback: true
      }
};

module.exports = config;