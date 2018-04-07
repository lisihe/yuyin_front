import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8084/api'
export default {
  install (Vue) {
    Vue.prototype.$axios = axios
  }
}
