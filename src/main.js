import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// IE兼容
import 'babel-polyfill'
// 引入UI
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// 重置全局样式
import 'assets/css/reset.css'
// 引入存储组件
import VueCookie from 'vue-cookie'
// 全局事件
import utils from './assets/js/utils.js'
// 全局引用自定义模板
import modulesBox from 'components/modules'

// 全局使用
Vue.prototype.utils = utils
Vue.prototype.VueCookie = VueCookie

// 使用
Vue.use(iView)
Vue.use(modulesBox)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
