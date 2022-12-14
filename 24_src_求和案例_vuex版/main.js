// 该文件是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 引入vue-resource插件
// import vueResource from 'vue-resource'
// 引入vuex插件
import Vuex from 'vuex'
// 引入store
import store from './store/index'

// 关闭Vue的生产提示
Vue.config.productionTip = false


// 创建Vue实例对象
const vm = new Vue({
  el: '#app',
  render: h => h(App),
  // store: 'test',
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
})
console.log(vm);
