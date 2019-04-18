const Router = require('koa-router')
const mainRouter = new Router()
mainRouter.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

mainRouter.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

// mainRouter.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

module.exports = mainRouter


// nodemon 在启动服务之后，修改文件可以自动重启服务