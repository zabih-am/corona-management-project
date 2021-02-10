const express = require('express')
const port = process.env.PORT || 8080
const app = express()
// const serveStatic = require('serve-static')
// const path = require('path')

app.use(express.static(__dirname, '/dist/'));
app.get(/.*/, function(req,res) {
  res.sendFile(__dirname + "/dist/index.html")
});

app.listen(port)
console.log('Listening on port: ' + port)