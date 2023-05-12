const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //webpack entry and output config
    entry: {
        index: './src/index.js',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    //webpack plugins (e.g for HTML generation)
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
    ],
    
};