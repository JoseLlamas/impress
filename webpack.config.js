var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'index.build.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        host: '0.0.0.0',
        index: path.join(__dirname, 'src', 'index.html'),
        serveIndex: true,
        headers: {
            'Cache-Control': 'no-store'
        }
    },
    resolve: {
        extensions: ['.css', '.js']
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Presentación impress.js',
        template: path.join(__dirname, 'src', 'index.html')
    })],
    module: {
        rules: [{
            test: /.js$/,
            exclude: /node_modules/,
            use : {
                loader: 'babel-loader',
                options: {
                    presets : [['@babel/preset-env', {
                        useBuiltIns: 'usage',
                        corejs: 3
                    }]],
                }
            }
        }, {
            test: /.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
};