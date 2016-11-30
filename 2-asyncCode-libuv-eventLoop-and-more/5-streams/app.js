'use strict'

const { createReadStream, createWriteStream } = require('fs')

// Encoding will return it as readable characters, highWaterMark will determine the number of bytes you want the buffer chunks to be
let readable = createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 })

let writable = createWriteStream(__dirname + '/greetcopy.txt')
// Since this inherits from Stream which inherits from EventEmitter we can use on
readable.on('data', function(chunk) {
	// To see chunk bits
	console.log(chunk.length)
	console.log(chunk)
	writable.write(chunk)
})