const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // 静态资源存放的文件夹(相对于ouputDir)
  assetsDir: 'assets',
  // eslint-loader 是否在保存的时候检查(果断不用，这玩意儿我都没装)
  lintOnSave: false,
  // 我用的only，打包后小些
  // compiler: false,
  productionSourceMap: false,
  devServer: {
    port: 8082,
    disableHostCheck: true, //webpack4.0 开启热更新
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('path/to/global.less')],
    },
  },
}
