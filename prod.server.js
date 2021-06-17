// node起服务
const express = require('express')
const app = express()

app.use(express.static('./build'))

var port = process.env.PORT || 8090

module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('listening at http://localhost:' + port + '\n')
})
