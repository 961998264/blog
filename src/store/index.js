import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
Vue.use(Vuex)
const modules = { blog, }
const store = new Vuex.Store({
  modules
})
export default store
