'use strict'

const EventEmitter = require('events'); // EventEmitter - function constructor
const { inherits } = require('util'); // util library

// My function constructor
function Greetr() {
	this.greeting = 'Hello world!';
}

// Any objects created from Greetr should also have access to the methods and properties on the prototype of EventEmitter
// util.inherits(Greetr, EventEmitter); if not destructured
inherits(Greetr, EventEmitter);

// Adding properties after the fact.  Access to both objects.
Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
}

// Creating new object
let greeter1 = new Greetr();

// Access to both objects.  Runs after greet function emits
greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');