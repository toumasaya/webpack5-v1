const paths = require('./paths')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: paths.build,
    },
    compress: true,
    // open: true, // open in default browser
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true,
      },
    },
    port: 5566,
  },
  performance: {
    hints: 'warning',
    // in development mode the size of assets is bigger than in production
    maxEntrypointSize: 4096000,
    maxAssetSize: 4096000,
  },
}
