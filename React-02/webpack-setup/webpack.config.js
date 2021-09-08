const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: './src/App.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  moudle: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node-module/,
        options: { presets: ['@babel/preset-react'] }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}