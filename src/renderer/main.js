import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

import { hasPermission } from './utils/hasPermission'
import service from './utils/request'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

Vue.prototype.$ELEMENT = { size: 'small' }
// 全局的常量
Vue.prototype.hasPerm = hasPermission
Vue.prototype.api = service

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
