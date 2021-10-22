//const http = require('http')
const express = require('express')
const app = express()
app.use(express.json())


let notes = [
  {
    id: 1,
    content: "repasar Node js",
    important: true
  },
  {
    id: 2,
    content: "preguntar Dni de mina",
    important: true
  },
  {
    id: 3,
    content: "ver anime",
    important: false
  }
]

app.get('/', (request, response) => {
  response.send('<h1>HOLI</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)

  if (note)
    response.send(note)
  else
    response.status(404).end()

})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)

  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})

app.post('/api/notes', (request, response) => {
  const note = request.body

  const ids = notes.map(note => note.id)
  const maxId = Math.max(...ids)

  const newNote = {
    id: maxId + 1,
    content: note.content,
    important: typeof note.important !== undefined ? note.important : false
  }
  notes = notes.concat(newNote)

  response.json(newNote)

})


// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/plain' })
//   response.end('Hellow World')
// })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


