const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, './build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 9000,
    compress: false,
    stats: 'errors-only',
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'T9 keyboard',
      template: 'src/index.html',
      inject: 'body'
    })
  ]
}
