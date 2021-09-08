// module.exports = {
//   entry: './src1/index.js',
//   output: {
//     filename: 'bundle.js'
//   },
// }




// // === Mention the Output Directory ====

// const Path = require('path');

// module.exports = {
//   entry: './src1/index.js',
//   output: {
//     path: Path.resolve(__dirname + '/dist'),
//     filename: 'bundle.js'
//   },
  
// }
















// // === Mention watch for updates ====

// const Path = require('path');

// module.exports = {
//   entry: './src1/index.js',
//   output: {
//     path: Path.resolve(__dirname + '/dist'),
//     filename: 'bundle.js'
//   },
//   watch : true
// }











// === Webpack-dev-server ====

// const Path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src1/index.js',
//   output: {
//     path: Path.resolve(__dirname + '/dist'),
//     filename: 'bundle.js'
//   },
//   watch : true,
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src1/index.html',
//       filename: 'index.html'
//     })
//   ]
// }


// Budled your soruce code
// instead writing into Bundle.js it will store in memory
// Bring up server to serve this Bundle.sj



// === Loaders ====
// Style loader and Css loader

// const Path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src2/index.js',
//   output: {
//     path: Path.resolve(__dirname + '/dist'),
//     filename: 'bundle.js'
//   },
//   watch : true,
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         loader: ['style-loader', 'css-loader']
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src1/index.html',
//       filename: 'index.html'
//     })
//   ]
// }




// === Loaders ====
// Babel

// const Path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src2/index.js',
//   output: {
//     path: Path.resolve(__dirname + '/dist'),
//     filename: 'bundle.js'
//   },
//   watch : true,
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-env']
//         },
//         exclude: /node_module/
//       },
//       {
//         test: /\.css$/,
//         loader: ['style-loader', 'css-loader']
//       }
//     ]
//   },

//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src1/index.html',
//       filename: 'index.html'
//     })
//   ]
// }



// === Chnange the default port number ====

const Path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src2/index.js',
  output: {
    path: Path.resolve(__dirname + '/dist'),
    filename: 'bundle.js'
  },
  watch : true,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
        exclude: /node_module/
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src1/index.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    port: 9000
  }
}



// === Include React products ====

// const Path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src3/index.js',
//   output: {
//     path: Path.resolve(__dirname + '/dist'),
//     filename: 'bundle.js'
//   },
//   watch : true,
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-env', '@babel/preset-react']
//         },
//         exclude: /node_modules/
//       },
//       {
//         test: /\.css$/,
//         loader: ['style-loader', 'css-loader']
//       }
//     ]
//   },

//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src3/index.html',
//       filename: 'index.html'
//     })
//   ],
//   devServer: {
//     port: 9000
//   }
// }



// Production Env and Dev Env