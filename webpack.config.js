const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack = require('webpack')
const path = require('path')

var BUILD_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  devtool: 'source-map',
  entry: {
    'bundle': [
      'babel-polyfill',
      'react-hot-loader/patch',
      APP_DIR+'/js/index.jsx'
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module: {
    loaders: [{
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['babel-loader']
        }
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }

    ],
    rules: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      //{ test: /\.svg$/, exclude: [ /node_modules/ ], loader: 'raw-loader' },
      { test: /\.svg$/, exclude: [ /node_modules/ , '/src/js/'], loader: 'svg-url-loader' },
      {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }
    ]
  },
  plugins: [
    
    /*new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),*/
    new CopyWebpackPlugin([{
      from: 'src/index.html'
    }, {
      from: 'src/images',
      to: 'images'
    }, ])
  ]
}
