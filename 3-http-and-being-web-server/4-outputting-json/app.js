'use strict'

const { createServer } = require('http')	
const { createReadStream } = require('fs')	

createServer(function(req, res) {
    // Example of simple API with one endpoint, doing one thing.
    res.writeHead(200, { 'Content-Type': 'application/json' })
    let obj = {
    	firstName: 'Carl',
    	lastName: 'Weathers' 
    }
    // Converting server object to string for browser
    res.end(JSON.stringify(obj))	
    
}).listen(3000, '127.0.0.1')