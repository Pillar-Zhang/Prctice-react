const webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'app/index.js'),
        vendors: ['jquery', 'react', 'materialize-css'
        ]

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        loaders: [{
            test: require.resolve('jquery'),
            loader: 'expose?$'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.js[x]?$/,
            loaders: ['react-hot', 'babel-loader?presets[]=es2015&presets[]=react'],
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
            loader: 'file?name=fonts/[name].[ext]',
        }, {
            test: /\.(jpg|gif|png)$/,
            loader: "file-loader?name=images/[name].[ext]"
        }

        ]
    },
    resolve: {
        alias: {
            'jquery': path.join(__dirname, 'node_modules/jquery/dist/jquery')
        },
        extensions: ['', '.js', '.jsx', '.json', '.scss'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/template/index.html',
            chunks: ['vendors', 'index'],
            inject: 'body'
        }),
      
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            "window.Tether": 'tether',
            _: 'underscore'
        })

    ],
     devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        colors: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT || 5000
    }
}