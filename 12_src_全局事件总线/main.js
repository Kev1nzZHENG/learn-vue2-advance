// 该文件是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建空的vc实例（能拥有$on、$emit等方法）
/* const Demo = Vue.extend({});
const d = new Demo();
Vue.prototype.x = d; */
// 创建Vue实例对象
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  }
})
