'use strict'

const express = require('express')
const app = express()
const mongoose = require('mongoose')
// db destroyed after results
mongoose.connect('mongodb://user1:userpw@ds127428.mlab.com:27428/addressbook')

// Mongoose constructor Schema
let Schema = mongoose.Schema
// What should properties be and what types of data
let personSchema = new Schema({
	firstName: String,
	lastName: String,
	address: String
})
// Constructor
let Person = mongoose.model('Person', personSchema)
// New version of Person object
let sally = Person({
	firstName: 'Sally',
	lastName: 'Matthers',
	address: '222 Over There Way'	
})

// Save user - object returned from Person has methods on it
sally.save((err) => {
	if (err) throw err
	console.log('This person has been saved!')
})

// New version of Person object
let jerry = Person({
	firstName: 'Jerry',
	lastName: 'Matthers',
	address: '222 Over There Way'	
})

// Save user - object returned from Person has methods on it
jerry.save((err) => {
	if (err) throw err
	console.log('This person has been saved too!')
})

// Routes broken out to controllers for modularity
const apiController = require('./controllers/apiController')
const htmlController = require('./controllers/htmlController')

const port = process.env.PORT || 3000


// MIDDLEWARE
app.use('/assets', express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

// When loading the webpage
app.use('/', (req, res, next) => {
	console.log(`Request URL: ${req.url}`)
	// get all the users
	Person.find({}, (err, users) => {
		if (err) throw err
		// Object of all the users - logging query
		console.log("users", users);
	})
	next()
})


htmlController(app)

apiController(app)

app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})




