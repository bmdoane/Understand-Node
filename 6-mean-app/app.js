'use strict'

const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const { connect } = require('./db/database')
const app = express()

const port = process.env.PORT || 3000
app.set('port', port)

app.use('/assets', express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

// Listen
connect()
	.then(() =>
		app.listen(port, () => {
			console.log(`Listening on port: ${port}`)
		})
	)
	.catch(console.error)



