// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/vuex/store'
import './permission' // 全局路由配置


import 'normalize.css/normalize.css' // 重置初始样式
import '@/styles/index.css' // 全局样式

Vue.use(ElementUI)

// axios.defaults.baseURL = "http://market-uic.djws.com.cn/api"

//为了配置跨域
Vue.prototype.$api  = "/api"

Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
