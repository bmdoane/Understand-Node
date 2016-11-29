'use strict'
// say an event has happened and respond to the event happening
// Constructor function to create multiple emitters
function Emitter() {
	this.events = {}
}
// Adding a method to the prototype of the constructor
Emitter.prototype.on = function(eventType, listener) {
	// If the property exists, great!  Otherwise make it an array.
	this.events[eventType] = this.events[eventType] || []
	this.events[eventType].push(listener)	
}

// Say that something happened
Emitter.prototype.emit = function(eventType) {
	// If the property exists on the object, iterate over the array and fire the listener
	if(this.events[eventType]) {
		this.events[eventType].forEach(function(listener) {
			listener()
		})
	}
}

// Return the constructor from the require, so you can make as many Emitters as you want
module.exports = Emitter;







