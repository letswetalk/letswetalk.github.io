var path = require('path');

module.exports = {
    //entry: './app/main.js',
    entry: path.resolve(__dirname, './app/main.js'),
    output: {
        //path: './build',
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    }
};