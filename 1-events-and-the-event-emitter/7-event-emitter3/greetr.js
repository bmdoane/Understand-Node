'use strict'

// Using es6 classes you can avoid using util.inherits
const EventEmitter = require('events')

// Using a class expression
// Extends EventEmitter says what Greetr will inherit from
module.exports = class Greetr extends EventEmitter {
	constructor() {
		// Make sure the EventEmitter constructor is called
		super()
		this.greeting = 'Hello nurse!'
	}
	
	greet(data) {
		console.log(`${this.greeting}: ${data}`)
		this.emit('greet', data)
	}
}