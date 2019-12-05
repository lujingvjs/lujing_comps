/*
 * @Author: lujing 
 * @Date: 2019-12-03 19:26:37 
 * @Last Modified by: lujing
 * @Last Modified time: 2019-12-05 09:05:47
 * @Desc:  导出组件
 */

// 导入组件，组件必须声明 name
import waterRipper from './src/index.vue';
// 为组件提供 install 安装方法，供按需引入
const waterRipperName = function (Vue) {
 Vue.component(waterRipper.name, waterRipper)
}

// 默认导出组件
export default waterRipperName