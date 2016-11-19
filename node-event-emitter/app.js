'use strict'
// Using core Javascript module events.js
const Emitter = require('events')

let emtr = new Emitter()
// Methods on and emit are native to the module
emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.')
})

emtr.on('greet', function() {
	console.log('A greeting occurred')
})

console.log('Hello')
emtr.emit('greet')

