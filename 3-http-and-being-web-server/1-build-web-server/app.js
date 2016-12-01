'use strict'

const { createServer } = require('http')

createServer(function (req, res) {
	// When the C side of the code sees an event has happened, we need to build a response (status code, headers - info browser will use to interpret data)
  res.writeHead(200, {'Content-Type': 'text/plain'})
  // Send body.  res.end - Done sending.  This is last thing.
  res.end('Hello Nurse!\n')

// Listen(port number, standard internal IP address(necessary?))
}).listen(3000, '127.0.0.1')
