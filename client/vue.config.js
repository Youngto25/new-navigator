module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    config.output.filename('[name].[hash].js').end()
  }
}