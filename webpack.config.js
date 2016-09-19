var path = require('path');

var isProd = process.env.NODE_ENV === 'production';
var envPath = isProd ? 'build/':'';

module.exports = {
    entry: path.resolve(__dirname, './public/index.js'),
    output: {
        path: path.resolve(__dirname, './'+ envPath +'public/static'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            include: [path.resolve(__dirname, "./public")]
        }]
    }
};