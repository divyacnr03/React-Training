var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');
// Imported the already exisiting devConfig
var stripLoader = {
    test: [/\.js$/,/\.es6$/],
    exclude: /node_modules/,
    loader: WebpackStrip.loader('console.log')
}

devConfig.module.rules.push(stripLoader)
// Updated the settings

module.exports = devConfig;
// Export this new setting
