const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');


const { DIST_PATH, APP_PATH, NODE_MODULES_PATH } = require('./config/paths');
const { cssLoader } = require('./config/loaders');


const COMMON_CONFIG = {
  entry: {
    entry: './src/app/app.js'
  },
  output: {
    path: DIST_PATH,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_PATH,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.css$/,
        include: APP_PATH,
        use: [
          'style-loader',
          cssLoader
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      NODE_MODULES_PATH,
      APP_PATH
    ]
  },
  devtool: 'source-map',
  cache: true,
  devServer: {
    hot: true,
    port: 9001,
    inline: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    stats: {
      assets: true,
      timings: true,
      chunks: false,
      children: false
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new webpack.NamedModulesPlugin()
  ]
};

module.exports = COMMON_CONFIG;
