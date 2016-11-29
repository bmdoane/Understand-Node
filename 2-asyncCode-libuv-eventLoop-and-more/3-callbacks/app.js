'use strict'

function greet(callback) {
	console.log('Hello nurse!')
	var data = {
		name: 'Voltron'
	}	
	callback(data)
}

greet((data) => {
	console.log('The callback was invoked!')
	console.log(data)
})

greet((data) => {
	console.log('A different callback was invoked!')
	console.log(data.name)
})