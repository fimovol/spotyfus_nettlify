

const HtmlWebpackPlugin = require('html-webpack-plugin')

const imagenesRules =(
	{
		test: /\.jpg$/i,
		type: 'asset/resource'
	}
)

const sassRules = (
	{
		test: /\.s[ac]ss$/,
		use: [
			// Creates `style` nodes from JS strings
			'style-loader',
			// Translates CSS into CommonJS
			'css-loader',
			// Compiles Sass to CSS
			'sass-loader',
		],
	}
)

const cssRules = (
	{
		test: /\.css$/,
		use: [
			'style-loader',
			{ loader: 'css-loader', options: { importLoaders: 1 } },
			'postcss-loader',
		],
	}
)

const javascriptRules = (
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [
					['@babel/preset-react']
				]
			}
		}
	}
)

module.exports = {
	output:{
		filename: '[contenthash].bundle.js',
	},
	module: {
		rules: [javascriptRules  , cssRules, sassRules ,imagenesRules]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	],
	devServer: {
		compress: true,
		port: 4000,
	},
}
