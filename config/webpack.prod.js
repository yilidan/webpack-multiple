const path = require('path')
const {merge} = require('webpack-merge')
const webpackCommonConf = require('./webpack.common')

module.exports = merge(webpackCommonConf, {
  mode: 'production'
})