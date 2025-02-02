const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const port = process.env.PORT || 5500

app.use(express.static(__dirname + '/assets'))
app.use(fileUpload())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./AllRoutes/AllRoute'))

app.listen(port, () => {
  console.log('Server running at port ', port)
})