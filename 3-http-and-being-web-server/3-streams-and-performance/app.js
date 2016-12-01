'use strict'

const { createServer } = require('http')	
const { createReadStream } = require('fs')	

createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' })
    // Getting data by the chunk and piping to writable response stream
    createReadStream(__dirname + '/index.htm').pipe(res)	
    
}).listen(3000, '127.0.0.1')	