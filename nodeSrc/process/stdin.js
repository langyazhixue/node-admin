

process.stdin.setEncoding('utf8')

process.stdout.write('请输入用户名字> ')
process.stdin.on('readable', () => {
  var chunk = process.stdin.read()
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`)
  }
})

process.stdin.on('data', (data) => {
  process.stdout.write(`data: ${data}`)
})

process.stdin.on('end', () => {
  process.stdout.write('end')
})