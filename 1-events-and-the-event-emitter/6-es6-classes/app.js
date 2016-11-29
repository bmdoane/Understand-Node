'use strict'

// Person constructor and adding greet method via prototype
// function Person(firstname, lastname) {
// 	this.firstname = firstname
// 	this.lastname = lastname
// }

// Person.prototype.greet = function() {
// 	console.log(`Hello, ${this.fistname} ${this.lastname}`)
// }


// Above with ES6 classes
class Person {
	// Constructor adds each prop or method to each object created
	constructor(firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
	}
	// Any additional methods added to class are put on the prototype
	greet() {
		console.log(`Hello, ${this.firstname} ${this.lastname}`)
	}
}

let mike = new Person('Michael', 'Jackson')
mike.greet()

let latoya = new Person('Latoya', 'Jackson')
latoya.greet()

console.log(mike.__proto__)
console.log(latoya.__proto__)
console.log(mike.__proto__ === latoya.__proto__)
