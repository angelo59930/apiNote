const supertest = require('supertest')
const app = require('../index')

const api = supertest(app)

jest.setTimeout(20000)

test('Notes are returned as json', async () => {
  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('ESTO SE DEBE ROMPER WACHO', async () => {
  await api
    .delete('/api/notes/')
    .expect(404)
})

test('mala insercion', async () => {
  await api
    .get('/api/notes/6asd548a6s')
    .expect(400)
    .expect('Content-Type', /application\/json/)
})
