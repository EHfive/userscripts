const path = require('path')
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
const WebpackUserscript = require('webpack-userscript')
const { isDev } = require('./utils')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 9000

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: require.resolve('./src/index.js'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.user.js',
    globalObject: "this"
  },
  devServer: {
    port: PORT,
    https: true,
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    hot: true,
    hotOnly: true
  },
  resolve: {
    plugins: [
      PnpWebpackPlugin
    ]
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: require.resolve('babel-loader')
        }
      }
    ]
  },
  plugins: [
    new WebpackUserscript({
      headers: require.resolve('./header.js'),
      proxyScript: {
        baseUrl: `https://${HOST}:${PORT}`,
        filename: '[basename].proxy.user.js',
        enable: isDev
      }
    })
  ]
}
