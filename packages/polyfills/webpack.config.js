module.exports = {
  module: {
    rules: [
      {
        test: /vendor\/.*\.js$/,
        use: require.resolve('raw-loader')
      }
    ]
  }
}
