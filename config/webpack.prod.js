const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const webpackCommonConf = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')


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
      },
      // 图片-考虑base64编码的情况
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 小于10kb的图片用base64格式产出
              // 否则，依然延用file-loader的形式，产出url格式
              limit: 10*1024,
              // 打包到build/img目录下
              outputPath: '/img/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 会默认清空 output.path 文件夹
    new CleanWebpackPlugin(),
    // 抽离css文件
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    }),
    // 忽略 moment 下的 /locale 目录
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  optimization: {
    // 压缩css
    minimizer: [
      // webpack5自带 terser-webpack-plugin
      new TerserWebpackPlugin({
        // 是否将注释剥离到单独的文件中
        extractComments: false
      }), 
      new OptimizeCssAssetsPlugin({})
    ],
    // 分割代码块
    splitChunks: {
      /* 
        initial 入口chunk，对于异步导入的文件不处理
        async 异步chunk，只对异步导入的文件处理
        all 全部chunk
      */
      chunks: 'all',
      // 缓存分组
      cacheGroups: {
        // 第三方模块
        vendor: {
          name: 'vendor',
          // 权限更高，优先抽离
          priority: 1,
          test: /node_modules/,
          // 大小限制
          minSize: 0,
          // 复用次数
          minChunks: 1
        },
        // 公共模块
        common: {
          name: 'common',
          priority: 0,
          minSize: 0,
          minChunks: 2
        }
      }
    }
  }

})