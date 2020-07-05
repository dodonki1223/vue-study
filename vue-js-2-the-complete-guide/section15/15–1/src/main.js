import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

/*
    vue-resource: https://github.com/pagekit/vue-resource
    非公式ライブラリになっています（https://jp.vuejs.org/2016/11/03/retiring-vue-resource/）
 */
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})
