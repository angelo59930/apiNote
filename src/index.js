require('./config/connection') // conexion con la base de datos

const express = require('express')
const cors = require('cors')
const notFound = require('./middleware/notFound.js')
const handleErrors = require('./middleware/handleErrors.js')
const notesRouter = require('./controllers/notes')

const app = express()
  
app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
  response.send('<h1>HOLI</h1>')
})

app.use('/api/notes', notesRouter)

app.use(notFound)

app.use(handleErrors)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = app
