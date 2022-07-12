const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: [
    'vuetify'
  ],
  rules: {
  'vue/multi-word-component-names': ['error', {
    'ignores': ['default']
  }]
}})
