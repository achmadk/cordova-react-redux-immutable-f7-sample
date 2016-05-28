const webpack = require('webpack'); // Requiring the webpack lib

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080/', // Setting the URL for the hot reload
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
      test: /\.less$/,
      loader: 'style!css!less' // We add the css loader
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
    }, {
      test: /\.(woff|woff2)$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
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
    //   mangle: false,
    //   sourcemap: false,
    //   // compress: { warnings: false },
    //   // output: { comments: false }
    // })
  ]
};