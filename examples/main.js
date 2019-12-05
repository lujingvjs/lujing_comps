import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS


// 按需引入导入水波纹组件
import waterRipper from '../packages/water-ripper/index'
Vue.use(waterRipper)
Vue.use(iView)

// 全部引入
// import lujing_comps from '../packages/index'
// Vue.use(lujing_comps)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
