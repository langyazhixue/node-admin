const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
// 格式化json
// const json = require('koa-json')

const onerror = require('koa-onerror')

// 解析前端请求过来的参数，并让其成为对象
// const bodyparser = require('koa-bodyparser')
// 日志打印
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
// app.use(bodyparser({
//   enableTypes:['json', 'form', 'text']
// }))

// app.use(bodyparser())

// app.use(json())
app.use(logger())
// 静态文件指定
app.use(require('koa-static')(__dirname + '/public'))

// 配置模版引擎
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

console.log(users.routes())
// routes
app.use(index.routes()) //当后续所有中间件执行完成之后,判断ctx的status,如果next中间件已经正确处理了response响应,则直接略过
app.use(users.routes()) //当后续所有中间件执行完成之后,判断ctx的status,如果next中间件已经正确处理了response响应,则直接略过

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
