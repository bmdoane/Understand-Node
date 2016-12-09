'use strict'

const Todos = require('../models/todoModel')
const { json, urlencoded } = require('body-parser')

// Exporting endpoints
module.exports = function(app) {
	// Adding middleware
	// BodyParser will look at HTTP request before the app handles it
	// Parse out JSON from HTTP body
	app.use(json())
	// Handle urlencoded data
	app.use(urlencoded({ extended: true}))

	// Get all todos by name
	app.get('/api/todos/:uname', (req, res) => {
		Todos.find({ userName: req.params.uname }, (err, todos) => {
			// if (err) throw err
			res.send(todos)
		})
	})

	// Get individual todos
	app.get('/api/todo/:id', (req, res) => {
		console.log("req.params", req.params)
		Todos.findById({ _id: req.params.id}, (err, todo)  =>{
			// if (err) throw err
			res.send(todo)
		})
	})

	// Add or update a todo
	app.post('/api/todo', (req, res) => {
		// If id exists, find and update
		if (req.body.id) {
			Todos.findByIdAndUpdate(req.body.id, {
				todo: req.body.todo, 
				isDone: req.body.isDone, 
				hasAttachment: req.body.hasAttachment
			}, (err, todo) => {
				// When it finishes, give back what was just given to mongo (todo)
				if (err) throw err
				res.send('Todo updated')
			})
		// If its a new creation, make new and add to mongo
		} else {
			let newTodo = Todos({
		    userName: 'test',
		    todo: req.body.todo,
		    isDone: req.body.isDone,
		    hasAttachment: req.body.hasAttachment				
			})
			newTodo.save((err) => {
				if (err) throw err				
				res.send('New todo added')
			})
		}
	})

	// Delete todo
	app.delete('/api/todo', (req, res) => {
		Todos.findByIdAndRemove(req.body.id, (err) => {
			if (err) throw err
			res.send('Todo deleted')
		})
	})
}