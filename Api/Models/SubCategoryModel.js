require('../Config/conn')
let mongoose = require('mongoose')

let SubCategorySchema = mongoose.Schema({
  name: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
  }
})

module.exports = mongoose.model('sub_category',SubCategorySchema)