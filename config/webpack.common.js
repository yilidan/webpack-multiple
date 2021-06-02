const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')

const HtmlWebpackPlugins = []

function getEntry(globPath) {
  const files = glob.sync(globPath)

  const entryMap = {}
  files.forEach(entry => {
    const pathArr = entry.split('/')
    const fileName = pathArr[pathArr.length - 1]
    entryMap[fileName] = ['@babel/polyfill', entry]

    HtmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        title: '',
        template: path.resolve(__dirname, '../public/index.html'),
        filename: `./${fileName}.html`,
        chunks: ['common', fileName]
      })
    )

  })
  console.log(entryMap)
  
  return entryMap
}

const entries = getEntry(path.resolve(__dirname, `../src/pages/*`))

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, `../build`),
    // publicPath: '',
    filename: 'static/js/[name].[contenthash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    ...HtmlWebpackPlugins
  ]

}