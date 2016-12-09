'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

let todoSchema = new Schema({
    userName: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
})

let Todos = mongoose.model('Todos', todoSchema)

module.exports = Todos