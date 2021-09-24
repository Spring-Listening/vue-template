/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-07 18:04:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-24 15:33:37
 */
const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import '~@/theme/index.scss';`
      }
    }
  },
  publicPath: './',
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
    historyApiFallback: true,
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
