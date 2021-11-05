const { Schema, model } = require('mongoose')

const noteScheme = new Schema({
  content: String,
  date: Date,
  important: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

noteScheme.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    // el delete normalemnte es una mala practica pero
    // como el objeto que tocamos NO LO ESTAMOS TRANSFORMANDO no hay que preocuparse
  }
})

const Note = model('Note', noteScheme)

module.exports = Note

// Ejemplo de nota
// const note = new Note({
//   content: 'pedo',
//   date: new Date(),
//   important: true
// })

// note.save()
//   .then(result => {
//     console.log(result)
//     mongoose.connection.close()
//   })
//   .catch(err => console.log(err))
