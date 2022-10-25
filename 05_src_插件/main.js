// 该文件是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 1.引入plugins插件
import plugins from './plugins'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 2.应用（使用插件）
Vue.use(plugins,'test')
// 创建Vue实例对象
new Vue({
  render: h => h(App),
}).$mount('#app')
