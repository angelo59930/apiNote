require('../config/connection') // conexion con la base de datos
const notesRouter = require('express').Router()
const Note = require('../model/Note')

notesRouter.get('/', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

notesRouter.get('/:id', (request, response, next) => {
  const { id } = request.params

  Note.findById(id).then(note => {
    if (note) {
      response.send(note)
    } else {
      response.status(404).end()
    }
  }).catch(err => next(err))
})

notesRouter.delete('/:id', (request, response, next) => {
  const { id } = request.params

  Note.findByIdAndDelete(id).then(result => {
    response.status(204).end()
  }).catch(err => next(err))
})

notesRouter.put('/:id', (request, response, next) => {
  const { id } = request.params
  const note = request.body

  const newNoteInfo = {
    content: note.content,
    important: note.important
  }

  Note.findByIdAndUpdate(id, newNoteInfo, { new: true })
    .then(result => {
      response.json(result)
    }).catch(err => next(err))
})

notesRouter.post('/', (request, response) => {
  const note = request.body

  if (!note.content) {
    return response.status(400).json({
      error: 'required "content" field is missing'
    })
  }
  const newNote = new Note({
    content: note.content,
    date: new Date(),
    important: note.important || false
  })

  newNote.save().then(savedNote => {
    response.json(savedNote)
  })
})

module.exports = notesRouter
