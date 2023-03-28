const publicPath = process.env.NODE_ENV === 'production' ? '/time-spiral/' : '/'


const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: publicPath,
  pwa: {
    name: 'Time Spiral',
    // themeColor: '#4dbab5',
    // msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      share_target: {
        action: publicPath+'share',
        method: "GET",
        enctype: "application/x-www-form-urlencoded",
        params: {
          title: "title",
          text: "text",
          url: "url"
        }
      },
    },
},
  transpileDependencies: true
})
