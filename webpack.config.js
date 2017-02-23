var path = require('path');
var webpack = require('webpack');
const prod = process.argv.indexOf('-p') !== -1;

var defaults = {
    entry: './src/js/main.jsx',
    output: { path: __dirname, filename: 'public/bundle.js' },
    module: {
	loaders: [
	    {
		test: /.jsx?$/,
		loader: 'babel-loader',
		exclude: /node_modules/,
		query: {
		    presets: ['es2015', 'react']
		},
		plugins: ['transform-decorators-legacy',
			  'react-hot-loader/babel',
			  'transform-decorators'],
		babelrc: false

	    },
	    {
		test: /\.css$/,
		loaders: [
		    'style?sourceMap',
		    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
		]
	    }
	]
    },
    plugins: [
	new webpack.HotModuleReplacementPlugin(),
    ],
};

if (prod) {
    defaults.plugins = [
	new webpack.DefinePlugin({
	    'process.env': {
		NODE_ENV: JSON.stringify('production')
	    }
	}),
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.UglifyJsPlugin(),
	new webpack.optimize.AggressiveMergingPlugin()
    ];
    defaults.module.loaders[0].plugins = ['transform-decorators-legacy',
					  'transform-decorators'];

}

module.exports = defaults;
