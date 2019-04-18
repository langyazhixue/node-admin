/* 
  use:userControll
  author:jxx
*/
const sqlUser = require('../sql/sqlUser.js')
exports.login = async (ctx) => {
  let { name, password } = ctx.request.body
    if (name && password) {
      await sqlUser.findUserData(name)  // 都是数据库操作
        .then(result => {
          let res =  JSON.parse(JSON.stringify(result))
          if (res.length && name === res[0]['name'] && password === res[0]['password']) {
            ctx.body = {
              code: 200,
              message: '登录成功'
            }
          } else {
            ctx.status = 500
            ctx.body = {
              code: 500,
              message: '用户名或者密码错误'
            }
          }
        })
        .catch(err => {
          ctx.status = 500
          ctx.body = {
            code: 500,
            message: err
          }
        })
    } else {
      ctx.status = 500
      ctx.body = {
        code: 500,
        message: '参数有误'
      } 
  }
}
