var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'src'),
                query: {
                    presets: 'es2015',
                },
            },
            {
                test: /\.js/,
                loader: 'babel',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss/,
                loader: 'style!css!sass',
                // Or
                loaders: ['style', 'css', 'sass'],
            },
            {
                test: /\.html/,
                loader: 'html',
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
