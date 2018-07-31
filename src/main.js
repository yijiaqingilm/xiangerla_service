import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import './lib/flexible.js'
import ApiClient from 'lib/client'
import clientMiddleware from 'lib/clientMiddleware'
import { saveStore } from './lib/common'

import 'velocity-animate'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
import routes from './router/router'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

import App from './main.vue'
import VueResource from 'vue-resource'
import './directives/commonDirective.js'
import './filters/commonFilter'
import './lib/vueExends'

Vue.use(VueResource)

import mask from 'components/masking/masking.vue'
import ErrPanel from 'components/errorPanel/errorPanel'

Vue.component('masking', mask)
Vue.component('errPanel', ErrPanel)
let client = new ApiClient()
let applyClientMiddleware = clientMiddleware(client)(store.commit)
export { applyClientMiddleware }
// Init App
let app = new Vue({
  template: '<app/>',
  // Register App Component
  components: {
    app: App
  },
  router,
  created () {
    /* let user_store = sessionStorage.getItem('maimeng_user_store')
     user_store && this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(user_store)))*/
  },
  store
}).$mount('#app')

/**
 * 添加 ajax 全局拦截器
 */
Vue.http.interceptors.push(function (request, next) {
  if (request.global) {app.$store.state.showLoading = true}
  next((response) => {
    if (request.global) {app.$store.state.showLoading = false}
    // 统一的错误 处理机制 ==> 未添加
    var resultCode = response.data && response.data.resultCode
    // if (resultCode === status_err_code.FAILURE) {
    // window.f7.alert(response.data.result);
    //  return
    // }
    return response
  })
})

/* window.addEventListener('popstate', function () {
  app.$f7.closeModal()

})
window.onbeforeunload = function () {
  saveStore(app.$store.state)
}
window.addEventListener('pagehide', function () {
  saveStore(app.$store.state)
}, false)*/
export { app }


