require('../Config/conn')
let mongoose = require('mongoose')

let cityStateSchema = mongoose.Schema({
  name: String,
  state: String,
},{collection: 'city'})

module.exports = mongoose.model('city',cityStateSchema)