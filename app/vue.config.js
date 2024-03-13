const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

})

const mapsSettings = {
  apiKey: '05f02f8e-303d-44eb-988d-0d0abbe08436',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}
