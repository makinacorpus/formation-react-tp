var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/../public/',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    contentBase: 'public',
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader?presets[]=env,presets[]=react'
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

}
