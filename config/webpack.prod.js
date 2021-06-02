const path = require('path')
const { merge } = require('webpack-merge')
const webpackCommonConf = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = merge(webpackCommonConf, {
  mode: 'production',
  module: {
    rules: [

    ]
  },
  plugins: [
    // 会默认清空 output.path 文件夹
    new CleanWebpackPlugin()
  ]

})