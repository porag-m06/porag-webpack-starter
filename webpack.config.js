const mypath = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //webpack entry and output config
    entry: {
        index: './src/index.js',
    },

    output: {
        filename: '[name].bundle.js',
        path: mypath.resolve(__dirname, 'dist'),
        clean: true,
    },

    mode: 'production',

    //webpack plugins (e.g for HTML generation)
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
    ],

    //webpack loaders for css (e.g style-loder, css-loader)
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader'],
            }
        ],
    },


    //webpack dev server
    devServer: {
        static: './dist',
    },

    optimization: {
        runtimeChunk: 'single',
    },

    
};