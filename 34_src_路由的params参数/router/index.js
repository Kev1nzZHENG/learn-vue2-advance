// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            // 命名路由
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail
                        }
                    ]
                }
            ]
        }
    ]

})