var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/main.js',
    module: {
        rules: [
    {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }
        ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig]
};

