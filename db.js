var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456Jxx',
  database : 'Tables_in_runoob'
})

module.exports = connection