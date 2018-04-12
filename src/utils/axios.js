import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8084/api'
export default {
  install (Vue) {
    Vue.prototype.$axios = axios
  }
}
