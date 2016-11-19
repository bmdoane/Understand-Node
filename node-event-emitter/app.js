'use strict'
// Using core Javascript module events.js
const Emitter = require('events')
// Destructuring GREET property off events object
// The pattern of putting the property on the object in config allows for better troubleshooting with tools in case of misspelling
const { GREET } = require('./config').events

let emtr = new Emitter()
// Methods on and emit are native to the module
emtr.on(GREET, function() {
	console.log('Somewhere, someone said hello.')
})

emtr.on(GREET, function() {
	console.log('A greeting occurred')
})

console.log('Hello')
emtr.emit(GREET)

