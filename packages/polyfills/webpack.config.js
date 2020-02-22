module.exports = {
  module: {
    rules: [
      {
        test: /vender\/.*\.js$/,
        use: require.resolve('raw-loader')
      }
    ]
  }
}
