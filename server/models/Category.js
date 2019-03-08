const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let categorySchema = mongoose.Schema({
  name: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE, unique: true},
  adventures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Adventure' }]
})

let Category = mongoose.model('Category', categorySchema)

module.exports = Category;
