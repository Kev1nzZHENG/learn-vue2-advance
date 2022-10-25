// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {
                title: '关于',
            }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {
                title: '主页'
            },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {
                        isAuth: true,
                        title: '新闻'
                    }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {
                        isAuth: true,
                        title: '消息'
                    },
                    children: [
                        {
                            // 命名路由
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            meta: {
                                title: '详情',
                            },

                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                            // props:{a:1,b:'hello'}

                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到所有的params参数，以props的形式传给Detail组件
                            // props: true

                            // props的第三种写法，值为函数，函数的参数为$route,该函数返回对象中每一组key-value，都会通过props传给Detail组件
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})


// 全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
// 修改标签名字
router.afterEach((to, from) => {
    // console.log('后置路由守卫',to, from);
    if (to.meta.title) {
        document.title = to.meta.title || 'Vue路由'
    }

})
export default router