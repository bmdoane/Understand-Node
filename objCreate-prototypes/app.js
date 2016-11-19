'use strict'
// Object.create is a simple, fast and clean way to set up inheritance.
// Inheritance - Objects being able to share properties and methods of other objects
const person = {
	firstName: '',
	lastName: '',
	greet: function() {
		return `${this.firstName} ${this.lastName}`
	}
}

// Add properties to the prototype by overwriting them
// Javascript engine will find value on Karl before going to person
let karl = Object.create(person)
karl.firstName = 'Karl'
karl.lastName = "Karlson"

let lenny = Object.create(person)
lenny.firstName = 'Lenny'
lenny.lastName = "Leonard"

// Both objects point to person obj as there prototype and can share the greet function
console.log(karl.greet())
console.log(lenny.greet())

// This pattern of inheritance relates to the event emitter in Node
