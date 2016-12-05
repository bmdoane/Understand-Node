'use strict'

const express = require('express')
const { urlencoded } = require('body-parser')
const app = express()

const port = process.env.PORT || 3000


// MIDDLEWARE
// create application/x-www-form-urlencoded parser
const urlencodedParser = urlencoded({ extended: false })
// Any files in public folder become available to routes with /assets 
app.use('/assets', express.static(__dirname + '/public'))

// Template Engine - 2nd arg is file extension (where to find)
// By default, Express will look for static files in folder named views
app.set('view engine', 'ejs')

// Log url in console with each page change
app.use('/', (req, res, next) => {
	console.log(`Request URL: ${req.url}`)
	// Call the next middleware connected to this route
	next()
})


// Responds to HTTP request with method get and map to URL '/' 
app.get('/', (req, res) => {
	// Express looks to views folder, file index, with ejs extension
	res.render('index')
})

// : tells the JavaScript code in express that what follows could be anything
app.get('/employee/:id', (req, res) => {
	// Render method on ejs, running along express, can take a JS object
	// ID is variable for template (employee.ejs)
	res.render('employee', { ID: req.params.id, Qstr: req.query.qstr })
})

app.post('/employee', urlencodedParser, (req, res) => {
	res.send('Thank you!')
	console.log("req.body.firstName", req.body.firstName)
	console.log("req.body.lastName", req.body.lastName)
})

// Get json data
app.get('/api', (req, res) => {
	// Convert JavaScript object to JSON string
	res.json({ firstName: 'Montgomery', lastName: 'Burns', title: 'CEO' })
})

app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})