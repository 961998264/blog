import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import moment from 'moment';
Vue.prototype.moment = moment;
import VueSocketIO from 'vue-socket.io'
//px自动转化rem
import "lib-flexible/flexible.js"
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3001',
}))

Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
