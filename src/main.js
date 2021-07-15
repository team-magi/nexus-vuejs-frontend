import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import api from './api'

// 多语言
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// 資源
import 'element-ui/lib/theme-chalk/index.css'
import './assets/element.less'
import './assets/all.less'
// import {captcha} from './assets/js/captcha'
// Vue.prototype.$EventBus = new Vue()
Vue.config.productionTip = false
Vue.use(ElementUI)
locale.use(lang)
Vue.prototype.$api = api
Vue.prototype.$countDown = 300
// const objectAssign = require('object-assign')
// Vue.prototype.$assign = objectAssign
// captcha.init()

window.go = (path, data) => {
  let param = {
    name: path
  }

  if (data) {
    param.query = data }

  router.push(param);
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
