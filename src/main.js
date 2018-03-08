import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api, { domain } from './js/api'
import axios from 'axios'
import  './less/index.less'
import 'normalize.css'
import  './assets/css/style.css'


import store from './store/cart.js'



Vue.prototype.$http = axios;
axios.defaults.baseURL = domain;
axios.defaults.withCredentials = true;
Vue.prototype.$api = api;
Vue.use(ElementUI)
Vue.config.productionTip = false







/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App)
})
// store.commit('increment')
// console.log(this.$store.commit('increment'))
// console.log(this.$stores.state.count)
// store.commit("increment")