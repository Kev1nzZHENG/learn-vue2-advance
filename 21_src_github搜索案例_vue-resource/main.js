// 该文件是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 引入vue-resource插件
import vueResource from 'vue-resource'
// 使用插件
Vue.use(vueResource)
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
})
