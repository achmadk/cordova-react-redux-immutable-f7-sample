const webpack = require('webpack'); // Requiring the webpack lib

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8000', // Setting the URL for the hot reload
    'webpack/hot/only-dev-server', // Reload only the dev server
    './src/index.jsx'
    // './src/modules/main.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel' // Include the react-hot loader
    }, {
      test: /\.css$/,
      loader: 'style!css' // We add the css loader
    }, {
      // When you encounter images, compress them with image-webpack (wrapper around imagemin)
      // and then inline them as data64 URLs
      test: /.*\.(png|jpg|svg)$/i,
      loader: 'url!image-webpack',
    }, {
      test:  /\.ttf$|\.eot$|\.svg$/,
      loader: 'file'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/www',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './www',
    hot: true // Activate hot loading
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Wire in the hot loading plugin
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    //   output: { comments: false }
    // })
  ]
};