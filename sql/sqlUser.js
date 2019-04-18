const mysql = require('./query')
// 查找某个用户
exports.findUserData = ( name ) => {
  let _sql = `select * from users where name="${name}";`
  return mysql.query( _sql )
}
// 注册用户
exports.insertUserData = ( value ) => {
  let _sql = "insert into users set name=?,password=?,register_time=?;"
  return mysql.query( _sql, value )
}
// 删除用户
exports.deleteUserData = ( name ) => {
  let _sql = `delete from users where name="${name}";`
  return mysql.query( _sql )
}