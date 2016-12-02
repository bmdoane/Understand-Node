'use strict'

const express = require('express')
const app = express()

const port = process.env.PORT || 3000


// MIDDLEWARE
// Any files in public folder become available to routes with /assets 
app.use('/assets', express.static(__dirname + '/public'))
// Log url in console with each page change
app.use('/', (req, res, next) => {
	console.log(`Request URL: ${req.url}`)
	// Call the next middleware connected to this route
	next()
})


// Responds to HTTP request with method get and map to URL '/' 
app.get('/', (req, res) => {
	res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello Nurse!</h1></body></html>')
})

// : tells the JavaScript code in express that what follows could be anything
app.get('/employee/:id', (req, res) => {
	res.send(`<html><head></head><body><h1>Employee: ${req.params.id}</h1></body></html>`)
})

// Get json data
app.get('/api', (req, res) => {
	// Convert JavaScript object to JSON string
	res.json({ firstName: 'Montgomery', lastName: 'Burns', title: 'CEO' })
})

app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})