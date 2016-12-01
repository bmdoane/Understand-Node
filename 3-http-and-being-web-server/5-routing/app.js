'use strict'

const { createServer } = require('http')
const { createReadStream } = require('fs')

createServer(function(req, res) {
    // If basic URL
    if (req.url === '/') {
        createReadStream(__dirname + '/index.html').pipe(res)
    }
    // If /api
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        let obj = {
            firstname: 'Karl',
            lastname: 'Karlson'
        }
        res.end(JSON.stringify(obj))
    }
    // For any other routing address, handle with error
    else {
        res.writeHead(404)
        res.end()
    }
    
}).listen(3000, '127.0.0.1')