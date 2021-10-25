const mongoose = require('mongoose')

const password = 'fbLshV0RHC6035Dn'
const stringConnection = `mongodb+srv://angelo:${password}@cluster0.ldgm2.mongodb.net/DBNOTES?retryWrites=true&w=majority`

mongoose.connect(stringConnection)
  .then(() => {
    console.log('Coneccted database')
  }).catch(err => {
    console.log(err)
  })
