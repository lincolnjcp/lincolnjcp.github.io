const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const autoprefixer = require('autoprefixer');

const sourcePath = path.join(__dirname, 'src');
const staticSourcePath = path.join(sourcePath, 'css');
const buildPath = path.resolve(__dirname);

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
    'bundle': [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.resolve(sourcePath, 'js/index.jsx')
    ],
    'style': [
      path.resolve(staticSourcePath, 'style.css'),
    ],
    'design-system': [
      path.resolve(staticSourcePath, 'design-system.css'),
    ]
},
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            react: __dirname + '/node_modules/react'
        },
        extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
        modules: [
            sourcePath,
            path.resolve(__dirname, 'node_modules')
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks (module) {
                return module.context && module.context.indexOf('node_modules') >= 0;
            }
        }),
        
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: [
                            'last 3 version',
                            'ie >= 10'
                        ]
                    })
                ],
                context: staticSourcePath
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new PreloadWebpackPlugin({
            rel: 'preload',
            as: 'script',
            include: 'all',
            fileBlacklist: [/\.(css|map)$/, /base?.+/]
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new StyleExtHtmlWebpackPlugin({
            minify: true
        }),
        new CopyWebpackPlugin([{
      from: 'src/index.html'
    }, {
      from: 'src/images',
      to: 'images'
}, ])
    ],
    // devServer: {
    //     // devtool: 'eval',
    //     host:'10.248.67.13',
    //      port: 8080,
    //      open: true,
    //      inline: true,
    //      historyApiFallback: true,
    //     /* proxy: {
    //        "/": "http://localhost:8080"
    //      }*/
    //    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ],
                include: sourcePath
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: true } },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
                use: 'file-loader?name=assets/[name].[ext]'
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                use: [
                    'url-loader?limit=20480&name=assets/[name].[ext]'
                ],
                include: staticSourcePath
            }
        ]
    }
};