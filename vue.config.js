/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-07 18:04:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-19 22:52:04
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import '~@/theme/index.scss';`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-template' : '/',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@assets': path.resolve(__dirname, 'src/assets')
      }
    },
    // plugins: [new WebpackBundleAnalyzerPlugin()]
    plugins: [
      new MiniCssExtractPlugin({
        // 修改打包后css文件名
        filename: `css/[name].[contenthash:8].css`,
        chunkFilename: `css/[name].[contenthash:8].css`
      })
    ]
  },
  // 修改打包后img文件名
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => {
        options.name = `img/[name].[contenthash:8].[ext]`
        options.fallback = {
          loader: 'file-loader',
          options: {
            name: `img/[name].[contenthash:8].[ext]`
          }
        }
        return options
      })
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
