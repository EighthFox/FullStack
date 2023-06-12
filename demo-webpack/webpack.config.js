module.exports = {
    mode: 'development',
	entry: './app.js', 
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
	},
	module: {
		rules:[
			{
			test: /\.(js|jsx)$/,
			exclude: /node_module/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/react', '@babel/preset-env']
				}
			}
		}
		]
	}
}
