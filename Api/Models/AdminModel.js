require('../Config/conn')
const mongoose = require('mongoose')

let AdminSchema = mongoose.Schema({
  username: String,
  password: String,
  type: Number,
  status: {
    type: Boolean,
    default: true,
  }
})

module.exports = mongoose.model('admin',AdminSchema)