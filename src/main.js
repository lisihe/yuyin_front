// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from '@/utils/axios.js'
import storeConfig from '@/vuex/storeConfig.js'
import EasyScroll from 'easyscroll'
// import VueWebsocket from 'vue-websocket'

Vue.config.productionTip = false

Vue.use(EasyScroll)
Vue.use(ElementUI)
Vue.use(axios)
Vue.use(Vuex)
// Vue.use(VueWebsocket, 'ws://localhost:8084')

const store = new Vuex.Store(storeConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
