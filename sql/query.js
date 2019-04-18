var mysql = require('mysql');
var config = require('../config/dev.js')
var pool  = mysql.createPool({
  host     : config.database.host,
  user     : config.database.user,
  password : config.database.password,
  database : config.database.database,
  port     : config.database.port
});
let query = ( sql, values ) => {
  return new Promise(( resolve, reject ) => {
    pool.getConnection( (err, connection) => {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })
}
module.exports = {
  query
}