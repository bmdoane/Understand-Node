'use strict'

const { createServer } = require('http')
const { readFileSync } = require('fs')

createServer(function(req, res) {
  // text/html is MIME type for browser rendering 
  res.writeHead(200, { 'Content-Type': 'text/html' })
  // Get contents of file
  let html = readFileSync(__dirname + '/index.html', 'utf8')
  res.end(html)
    
}).listen(3000, '127.0.0.1')