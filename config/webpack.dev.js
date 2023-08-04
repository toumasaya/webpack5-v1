const paths = require('./paths')

module.exports = {
  mode: 'development',
  // Compilation fail on module contents change #77
  // https://github.com/webdiscus/pug-plugin/issues/77
  // workround: https://github.com/webdiscus/pug-plugin/issues/77#issuecomment-1556288370
  cache: false,
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
