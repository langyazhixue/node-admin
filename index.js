var  express = require('express')
var app = express()
var bodyParser = require('body-parser')
var multer = require('multer')
// cookie
var cookieParser = require('cookie-parser')
app.use(cookieParser())

var util = require('util')

var storage = multer.diskStorage({
  destination: function (req, file, cb) { //指定硬盘的路径，文件保存的地方
    cb(null, './public/upload')
  },
  filename: function (req, file, cb) {//指定文件名和拓展名
    //originalname 文件名
    var arr = file.originalname.split('.');
    // cb(null, arr[0] + '.' + arr[1]);
    cb(null, arr[0] + '-' + Date.now() + '.' + arr[1]);
  }
})
var upload = multer({storage: storage})


// var upload = multer({dest:'./uploads/'})
//var urlencodedParser = bodyParser.urlencoded({ extended: false }) // 创建 application/x-www-form-urlencoded 编码解析
// 添加 json解析
// application/json和 application/x-www-form-urlencoded都是表单数据发送时的编码类型。

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/public', express.static('public'))
app.get('/',(req,res) => {
  res.send('11')
})
// post表单
app.post('/server/sendName',function(req,res) {
  console.log(req.body)
  console.log("Cookies: " + util.inspect(req.cookies));
  res.send(req.body)
})

// 表单上传
app.post('/server/upload',upload.array('file',5),function(req,res) {
  console.log(req.files)
  res.send('success')
})

var server = app.listen(8081, function(){
  var host = server.address().address
  var port = server.address().port
  console.log(server.address())
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})