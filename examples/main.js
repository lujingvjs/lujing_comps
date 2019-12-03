import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
// 导入水波纹组件
import waterRipper from '../packages/water-ripper/index'

// 注册组件
Vue.use(waterRipper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
