// 该文件是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'

// ELEMENT UI全部引入
// 引入element-ui组件
// import ElementUI from 'element-ui';
// 引入element ui全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// ELEMENT UI部分引入
import { Button, DatePicker, Row } from 'element-ui'

// 关闭Vue的生产提示
Vue.config.productionTip = false

Vue.component(Button.name, Button)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Row.name, Row)

// 使用ELEMENT UI
// Vue.use(ElementUI)






// 创建Vue实例对象
const vm = new Vue({
  el: '#app',
  render: h => h(App),
})
