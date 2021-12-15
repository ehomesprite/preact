const path = require('path');

const _dir = (...arg) => path.resolve(__dirname, ...arg);

module.exports = {
	mode: 'development',
	entry: _dir('./main.jsx'),
	output: {
		filename: 'main.js',
		path: _dir('./dist')
	},
	devtool: 'inline-source-map',
	devServer: {
		static: _dir('./dist'),
		client: {
			overlay: {
				errors: true,
				warnings: false
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
