import Vue from 'vue'
import App from './App'
import router from './router'

// imports propios
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// configuracion ElementUI
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>', 
})