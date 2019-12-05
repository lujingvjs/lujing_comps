/*
 * @Author: lujing 
 * @Date: 2019-12-03 19:32:05 
 * @Last Modified by: lujing
 * @Last Modified time: 2019-12-05 09:05:44
 * @Desc:  整合所有的组件，对外导出，即一个完整的组件库
 */

// 导入颜色选择器组件
import waterRipper from './water-ripper/src/index.vue'

// 所有的组件
const vueCellSViews = {
    waterRipper
}
// 遍历挂载组件
function install(Vue, _) {
    Object.keys(vueCellSViews).forEach(key => {
        Vue.component(key, vueCellSViews[key]);
    });
}

// 
const API = {
    // version: process.env.VERSION,
    install
    // ...vueCellSViews
}


// 导出模块
export default API
// module.exports.default = module.exports = API;