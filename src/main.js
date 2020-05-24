import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import jsonp from 'jsonp'
// import env from './env'


//mock开关
const mock = false
if(mock){
  require("./mock/api.js")
}

//根据前端跨域方式调整
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 2000


//根据环境变量获取不同的地址
// axios.defaults.baseURL = env.baseURL

//错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data
  if(res.status == 0){
    return res.data
  }else if(res.status == 10){
    window.location.href = '/#/login'
  }else{
    alert(res.msg)
  }
})

Vue.prototype.$http = axios
Vue.prototype.$jsonp = jsonp

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
