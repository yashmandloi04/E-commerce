require('../Config/conn')
let mongoose = require('mongoose')

let signUpSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  contact: String,
  address: String,
  gender: String,
  state: String,
  city: String,
  status: {
    type: Boolean,
    default: true,
  }
})

module.exports = mongoose.model('user',signUpSchema)