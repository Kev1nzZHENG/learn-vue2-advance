// 该文件是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 引入Vue-router
import VueRouter from 'vue-router'
// 引入路由器
import router from './router/index'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 使用Vue-router
Vue.use(VueRouter)


// 创建Vue实例对象
const vm = new Vue({
  el: '#app',
  render: h => h(App),
  router
})
