var path = require('path');
module.exports = {
	entry: './src/js/index.js',
	watch: true,
	output: {
		path: __dirname + '/js',
		filename: 'main.js'
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
      Utilities: path.resolve(__dirname, 'src/js/utils')
		}
  }
}