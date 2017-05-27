var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
        },{
        test: /(\.css|\.scss|\.sass)$/, 
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
      }
    ]
  }
};