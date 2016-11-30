'use strict'

const { readFileSync, readFile } = require('fs')
// Reading binary data from the OS
// Args - path to directory and encoding
let greet = readFileSync(__dirname + '/greet.txt', 'utf8')
console.log(greet)

// Without the encoding arg, you receive buffered data.
let greet2 = readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
	// Without the encoding arg you could print with data.toString()
	console.log(data)
})

console.log('Done!')