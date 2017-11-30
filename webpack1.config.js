var path = require('path')
var webpack = require('webpack'),
ExtractTextPlugin = require("extract-text-webpack-plugin"),
ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');



var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var srcPath = path.resolve(__dirname, 'src');
var buildPath = path.resolve(__dirname, 'dist');

module.exports = {
    bail: true,
    devtool: false,
    entry: {
        main: ['./src/js/index.jsx']
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
                test: /\.pcss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: '[name].pcss' })
    ]
};