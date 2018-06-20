var Visualizer = require('webpack-visualizer-plugin')

module.exports = {
  devServer: {
    port: 16666
  },
  configureWebpack: {
    plugins: [
      new Visualizer()
    ]
  }
}