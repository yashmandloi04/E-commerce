require('../Config/conn')
let mongoose = require('mongoose')

let CategorySchema = mongoose.Schema({
  name: String,
})

module.exports = mongoose.model('category',CategorySchema)