// const fs = require('fs')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
})
// chrome://flags/#allow-insecure-localhost

const fs = require('fs');

module.exports = {
  devServer: {
    // host: '192.168.0.4',
    host: '192.168.0.4',
    port: 8080,
    https: {
      key: fs.readFileSync('.certs/key.pem'),
      cert: fs.readFileSync('.certs/cert.pem'),
    },
    proxy: {
      '^/api': {
        target: 'https://developer-lostark.game.onstove.com/',
        ws: true,
        changeOrigin: true
      }
    },

  },
};