const path = require('path')
const { merge } = require('webpack-merge')
const webpackCommonConf = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = merge(webpackCommonConf, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 这边不在使用style-loader
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    // 会默认清空 output.path 文件夹
    new CleanWebpackPlugin(),
    // 抽离css文件
    new MiniCssExtractPlugin({
      filename: 'css/main.[contenthash:8].css'
    })
  ],
  optimization: {
    // 压缩css
    minimizer: [new TerserWebpackPlugin({}), new OptimizeCssAssetsWebpackPlugin({})]
  }

})