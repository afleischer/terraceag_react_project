var HTMLWebpackPlugin = require('html-webpack-plugin');

HTMLWebpackPlugin({
    template: __dirname + 'app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: __dirname + 'main.js',
    module: {
        loaders: [
    {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
    }
        ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    }
};

