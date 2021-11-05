const mongoose = require('mongoose')

const password = 'fbLshV0RHC6035Dn'
/* const { MONGO_DB_URI_TEST, NODE_ENV } = process.env
 const connectionString = NODE_ENV === 'test'
  ? MONGO_DB_URI_TEST
  : `mongodb+srv://angelo:${password}@cluster0.ldgm2.mongodb.net/DBNOTES?retryWrites=true&w=majority`
*/
const connectionString = `mongodb+srv://angelo:${password}@cluster0.ldgm2.mongodb.net/DBNOTES?retryWrites=true&w=majority`

mongoose.connect(connectionString)
  .then(() => {
    console.log('Coneccted database')
  }).catch(err => {
    console.log(err)
  })
