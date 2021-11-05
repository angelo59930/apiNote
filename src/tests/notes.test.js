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
