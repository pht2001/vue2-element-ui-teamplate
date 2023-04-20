const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const Webpack = require('webpack')
// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

const name = 'vue2-template'
const port = 9333

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  // lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: false,
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      // fix "process is not defined" error:
      // (do "npm install process" before running the build)
      new Webpack.ProvidePlugin({
        process: require.resolve('process/browser')
      })
      // new NodePolyfillPlugin()
    ]
  }
})
