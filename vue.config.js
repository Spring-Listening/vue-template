/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-07 18:04:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-08 10:49:11
 */
const path = require('path')
module.exports = {
  publicPath: '/',
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('@', path.join(__dirname, 'src'))
  //     .set('@assets', path.join(__dirname, 'src/assets'))
  //     .set('components', path.join(__dirname, 'src/components'))
  // },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@assets': path.resolve(__dirname, 'src/assets')
      }
    }
    // plugins: [new WebpackBundleAnalyzerPlugin()]
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
