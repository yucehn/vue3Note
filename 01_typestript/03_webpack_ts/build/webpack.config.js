const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production' // 是否生产环境

function resolve (dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  mode: isProd ? 'production' : 'development', // 開發模式
  entry: {
    app: './src/main.ts' // 主入口目錄
  },

  output: {
    path: resolve('dist'), // 打包後的目錄 放在dist
    filename: '[name].[contenthash:8].js' // 建立時檔案命名方式
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/, //針對含有ts文件
        use: 'ts-loader', // 使用編譯
        include: [resolve('src')] // 位置
      }
    ]
  },

  plugins: [
    // 將dist中以前打包的js清除
    new CleanWebpackPlugin({
    }),
    // 針對當前hmlt進行打包
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],

  resolve: { //
    extensions: ['.ts', '.tsx', '.js']
  },
  // 錯誤得知提示
  devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',

  devServer: {
    host: 'localhost', // 主机名
    stats: 'errors-only', // 打包日志输出输出错误信息
    port: 8081,
    open: true
  },
}