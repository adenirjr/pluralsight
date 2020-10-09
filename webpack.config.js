const path = require('path');

module.exports = {
    resolve: {
        modules: [
            path.resolve('./lib'),
            path.resolve('./node_modules'),
        ]
    },
    entry: ['@babel/polyfill', './lib/renderers/dom.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};