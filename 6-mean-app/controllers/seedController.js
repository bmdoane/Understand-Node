'use strict'
// Get todoModel
const Todos = require('../models/todoModel')

module.exports = function(app) {
	// You can put endpoint in browser url to see data
	app.get('/api/seedTodos', (req, res) => {
		// Seed database
		let starterTodos = [
			{
				userName: 'test',
		    todo: 'mow the pool',
		    isDone: false,
		    hasAttachment: false
			},
			{
				userName: 'test',
		    todo: 'feed the car',
		    isDone: false,
		    hasAttachment: false
			},
			{
				userName: 'test',
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