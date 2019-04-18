const Router = require('koa-router')
const usersRouter = new Router()
const koaBody = require('koa-body')
usersRouter.prefix('/user')
const controller = require('../controller/cUsers.js')

/* 
  登陆路由
 */
usersRouter.post('/login',koaBody(),controller.login)

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

module.exports = usersRouter
