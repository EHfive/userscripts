module.exports = {
  module: {
    rules: [
      {
        test: /vendor\/.*\.js$/,
        use: {
          loader: require.resolve('imports-loader'),
          options: {
            this: '>window'
          }
        }
      }
    ]
  }
}
