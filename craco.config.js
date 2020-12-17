const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@pages': resolve('src/pages'),
      '@components': resolve('src/components'),
      '@store': resolve('src/store'),
      '@utils': resolve('src/utils'),
      '@assets': resolve('src/assets'),
      '@router': resolve('src/router'),
      '@config': resolve('src/config'),
      '@services': resolve('src/services'),
      '@types': resolve('src/types'),
    },
  },
}
