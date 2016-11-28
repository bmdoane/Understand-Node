'use strict'

// util.inherits connects just the prototypes, attaching the greet function but not firstname and lastname from person.  Person.call(this) on line 15 explicitly attaches the Person constructor object and it's props and methods.  Otherwise only the greet method and badgenumber are seen on the object created by the Policeman constructor.
const util = require('util');

function Person() {
	this.firstname = 'John';
	this.lastname = 'Voltron';
}

Person.prototype.greet = function() {
	console.log(`Hello ${this.firstname} ${this.lastname}`);
}

function Policeman() {
	Person.call(this);
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
let officer = new Policeman();
officer.greet();