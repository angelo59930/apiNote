const { Schema, model } = require('mongoose')

const userScheme = new Schema({
  username: String,
  name: String,
  passwordHash: String,
  note: [{
    type: Schema.types.ObjectId,
    ref: 'Note'
  }]
})

userScheme.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v

    delete returnedObject.passwordHash
  }
})

const User = model('User', userScheme)

module.exports = User
