'use strict'

const Emitter = require('./emitter')

let emtr = new Emitter()

// 'greet' is the property name of the property on the object
emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.')
})

emtr.on('greet', function() {
	console.log('A greeting occurred')
})

// Send a greeting to the console
console.log('Hello')
// Let application know it happened
// This is happening manually
// Emit finds the property, loops through array and executes functions
emtr.emit('greet')