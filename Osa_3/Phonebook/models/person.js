const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

mongoose.set('useFindAndModify', false)

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
    unique: true
  },
  number: {
    type: String,
    minlength: 8,
    required: true,
    unique: true
  }
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)