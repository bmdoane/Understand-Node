'use strict'

const express = require('express')
const app = express()
// Routes broken out to controllers for modularity
const apiController = require('./controllers/apiController')
const htmlController = require('./controllers/htmlController')

const port = process.env.PORT || 3000


// MIDDLEWARE
app.use('/assets', express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

app.use('/', (req, res, next) => {
	console.log(`Request URL: ${req.url}`)
	next()
})


htmlController(app)

apiController(app)

app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})




