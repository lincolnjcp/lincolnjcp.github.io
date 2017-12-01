var path = require('path'),
pathsHelper = require('./lib/paths-helper');

var webpack = require('webpack'),
ExtractTextPlugin = require('extract-text-webpack-plugin');

var postcssImport = require('postcss-import');
var stylelint = require('stylelint');
var postcssReporter = require('postcss-reporter');
var postcssCssnext = require('postcss-cssnext');
var postcssNested = require('postcss-nested');
var postcssRemoveRoot = require('postcss-remove-root');
var cssMqpacker = require('css-mqpacker');
var cssnano = require('cssnano');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var srcPath = path.resolve(__dirname, 'src');
var buildPath = path.resolve(__dirname, 'dist');

module.exports = {
    context: srcPath,
    
    output: {
        filename: '[name].js',
      },
      resolveLoader: {
        alias: {
          'css-prefix-variables': path.resolve(__dirname, './lib/css-prefix-variables.js')
        }
      },
    bail: true,
    devtool: false,
    entry: {
        main: ['./bundle.js']
    },
    output: {
        path: buildPath,
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: srcPath,
                exclude: [nodeModulesPath],
                loader: 'babel-loader'
            },
            {
                enforce: 'pre',
                test: /\.css$/,
                include: [
                srcPath
                ],
                use: [
                  {
                    loader: 'css-prefix-variables',
                    options: {
                       path:path.resolve(__dirname, './src/variables/variables.css')
                    }
                  }
                ]
              },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                      'css-loader',
                      {
                        loader: 'postcss-loader',
                        options: {
                          sourceMap: 'inline',
                          plugins: () => [
                            postcssImport,
                            stylelint(),
                            postcssReporter(),
                            postcssCssnext({
                              features: {
                                autoprefixer: {
                                  grid: false
                                }
                              }
                            }),
                            postcssNested,
                            postcssRemoveRoot,
                            cssMqpacker({
                              sort: true
                            }),
                            cssnano({
                                autoprefixer: false,
                                safe: true
                            })
                          ]
                        }
                      }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};