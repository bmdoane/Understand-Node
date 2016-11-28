'use strict'

const Greetr = require('./greetr')

let greeter1 = new Greetr()

greeter1.on('greet', function(data) {
	console.log(`Someone greeted!: ${data}`)
})

greeter1.greet('Ratchet')