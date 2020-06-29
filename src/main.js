import Vue from 'vue'
import App from './App.vue'
import './element/element'
import './assets/css/index.less'
import axios from 'axios'
import router from './router/router'
axios.defaults.baseURL = 'https://autumnfish.cn'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
