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
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://localhost:3001',
// }))
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


// # src/main.js
import tinymce from 'tinymce'
import VueTinymce from '@packy-tang/vue-tinymce'
//样式
import 'tinymce/skins/content/default/content.min.css'
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/ui/oxide/content.min.css'

//主题
import 'tinymce/themes/silver'

//插件
import 'tinymce/plugins/link' //链接插件
import 'tinymce/plugins/image' //图片插件
import 'tinymce/plugins/media' //媒体插件
import 'tinymce/plugins/table' //表格插件
import 'tinymce/plugins/lists' //列表插件
import 'tinymce/plugins/quickbars' //快速栏插件
import 'tinymce/plugins/fullscreen' //全屏插件
//本地化
Vue.prototype.$tinymce = tinymce
Vue.use(VueTinymce)

Vue.use(Antd)
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
