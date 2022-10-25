// 1.引入(require) express
const express = require('express')
// 安装服务器中间件connect-history-api-fallback（npm i connect-history-api-fallback），并引入，解决服务器刷新404 
const history = require('connect-history-api-fallback')

// 2.创建app实例服务对象
const app = express();
// 6.应用中间件connect-history-api-fallback，要在传入静态资源前
app.use(history())

// 5.创建static文件夹，传入静态资源
app.use(express.static(__dirname + '/static'))

// 4.配置后端路由
app.get('/person', (request, respond) => {
    respond.send({
        name: 'tom',
        age: 18
    })

})

// 3.端口监听
app.listen(5005, (err) => {
    if (!err) console.log('服务器启动成功了');
})