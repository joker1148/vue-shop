import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import jsonp from 'jsonp'


Vue.prototype.$http = axios
Vue.prototype.$jsonp = jsonp

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
