var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './public/index.js'),
    output: {
        path: path.resolve(__dirname, './build/public/static'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }]
    }
};