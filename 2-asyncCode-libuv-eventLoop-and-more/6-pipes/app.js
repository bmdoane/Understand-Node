'use strict'

const { createReadStream, createWriteStream } = require('fs')
// Node module to compress files
const { createGzip } = require('zlib')
// Not concerned about encoding, nor chunk size
let readable = createReadStream(__dirname + '/greet.txt')

let writable = createWriteStream(__dirname + '/greetcopy.txt')

// Create transform stream.  Anytime data is sent to it, it compresses that chunk.  Its readable and writable, so it can be piped.
let gzip = createGzip()

let compressed = createWriteStream(__dirname + '/greet.txt.gz')
// Pipe sets up the same structure as below, the destination is the arg
// Pipe returns a value.  The value is the destination - writable 
readable
	.pipe(writable)
// readable.on('data', function(chunk) {
// 	writable.write(chunk)
// })

// Chaining methods - Read from file, compress data, write to compressed file
readable
	.pipe(gzip)
	.pipe(compressed)