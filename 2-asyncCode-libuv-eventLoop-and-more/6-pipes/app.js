'use strict'

const { createReadStream, createWriteStream } = require('fs')
// Not concerned about encoding, nor chunk size
let readable = createReadStream(__dirname + '/greet.txt')

let writable = createWriteStream(__dirname + '/greetcopy.txt')
// Pipe sets up the same structure as below, the destination is the arg
// Pipe returns a value.  The value is the destination - writable 
readable.pipe(writable)

// readable.on('data', function(chunk) {
// 	writable.write(chunk)
// })