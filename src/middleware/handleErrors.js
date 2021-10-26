module.export = (error, request, response) => {
  console.error(error.name)
  if (error.name === 'CastError') {
    response.status(400).send({ error: 'id used is malformed' })
  } else {
    response.status(500).end()
  }
}
