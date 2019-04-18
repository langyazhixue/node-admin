/* 
  use:userControll
  author:jxx
*/
const sqlUser = require('../sql/sqlUser.js')
exports.login = async (ctx) => {
  ctx.status = 500
  ctx.body = {
    message: '5000'
  }
  // 先验证参数
  // console.log(ctx)
  // ctx.body = {
  //   code: 200,
  //   message: '登录成功'
  // }
  // console.log(ctx.request.body)
  // let { name, password } = ctx.request.body
  //   if (name && password) {
  //     await sqlUser.findUserData(name)  // 都是数据库操作
  //       .then(result => {
  //         let res =  result
  //         if (res.length && name === res[0]['name'] && password === res[0]['password']) {
  //           ctx.body = {
  //             code: 200,
  //             message: '登录成功'
  //           }
  //           next()
  //         }
  //       })
  //       .catch(err => {
  //         ctx.body = {
  //           code: 500,
  //           message: err
  //         }
  //         next() 
  //       })
  //   } else {
  //     ctx.body = {
  //       code: 500,
  //       message: '参数有误'
  //     }
  //     next()
  // }
}
