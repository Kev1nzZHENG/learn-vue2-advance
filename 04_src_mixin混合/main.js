// 该文件是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 引入mixin
import { mixin1, mixin2 } from './mixin'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 引入全局混合
Vue.mixin(mixin1)
Vue.mixin(mixin2)
// 创建Vue实例对象
new Vue({
  render: h => h(App),
}).$mount('#app')
