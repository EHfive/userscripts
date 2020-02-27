const path = require('path')
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
const WebpackUserscript = require('webpack-userscript')
const { isDev } = require('./utils')
const pkg = require('./package')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 9000

const BASE_URL = `https://${HOST}:${PORT}/`

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
}

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: require.resolve('./src/index.js'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${pkg.name}.user.js`,
    globalObject: "this",
    publicPath: BASE_URL,
    jsonpFunction: "userscriptJsonpFunction"
  },
  devServer: {
    port: PORT,
    https: true,
    headers: corsHeaders,
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
        use: {
          loader: require.resolve('babel-loader')
        },
        exclude: [
          /node_modules\/(?!(consola)\/).*/,
          /userscripts\/packages\/polyfills.*/
        ]
      }
    ]
  },
  plugins: [
    new WebpackUserscript({
      headers: require.resolve('./header.js'),
      proxyScript: {
        baseUrl: BASE_URL,
        filename: '[basename].proxy.user.js',
        enable: isDev
      }
    })
  ]
}
