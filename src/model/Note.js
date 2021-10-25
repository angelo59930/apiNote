const { Schema, model } = require('mongoose')

const noteScheme = new Schema({
  content: String,
  date: Date,
  important: Boolean
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
