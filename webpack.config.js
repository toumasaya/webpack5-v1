const { merge } = require('webpack-merge')
const commonConfig = require('./config/webpack.common.js')
const devConfig = require('./config/webpack.dev.js')
const prodConfig = require('./config/webpack.prod.js')

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production'

  const modeConfig = isProd ? prodConfig : devConfig

  return merge(commonConfig, modeConfig)
}
