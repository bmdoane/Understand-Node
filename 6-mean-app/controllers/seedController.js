'use strict'
// Get todoModel
const Todos = require('../models/todoModel')

module.exports = function(app) {
	app.get('/api/seedTodos', (req, res) => {
		// Seed database
		let starterTodos = [
			{
				userName: 'Jerry Tarkenian',
		    todo: 'mow the pool',
		    isDone: false,
		    hasAttachment: false
			},
			{
				userName: 'Bobby Knight',
		    todo: 'feed the car',
		    isDone: false,
		    hasAttachment: false
			},
			{
				userName: 'John Thompson',
		    todo: 'pick up the beer',
		    isDone: false,
		    hasAttachment: false
			}						
		]
		// Mongoose model with methods - create accepts an array
		Todos.create(starterTodos, (err, results) => {
			res.send(results)
		})
	})
}