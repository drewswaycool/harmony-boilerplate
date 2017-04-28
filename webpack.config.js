const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const CLIENT_PATH = './client';
const SERVER_PATH = './server';
console.log(process.env.NODE_ENV);
module.exports = {
  devtool: 'source-map',
  entry: [
    CLIENT_PATH+'/src/index.js'
  ],
  output: {
    path: __dirname+"/server/client",
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
	new CopyWebpackPlugin([
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        { from: CLIENT_PATH+'/style/css/*.css', to: 'style/bundle.css' },
		    { from: CLIENT_PATH+'/index.html', to: 'index.html' }
	]),
	new webpack.optimize.UglifyJsPlugin( {
        compress: {
            warnings: true,
            screw_ie8: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true
        },
        output: {
            comments: false
        },
        sourceMap: true
    } )
  ]

};
