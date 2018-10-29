var path = require('path');
module.exports = {
  entry: {
    components: './src/js/index.js',
    pdp: './pages/pdp/pdp.js',
    preview: './pages/preview/preview.js'
  },
  watch: true,
  output: {
    path: __dirname + '/js',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      Utilities: path.resolve(__dirname, 'src/js/utils'),
      HTMLLoader: path.resolve(__dirname, 'src/js/loader'),
      Template: path.resolve(__dirname, 'src/js/Template')
    }
  }
};