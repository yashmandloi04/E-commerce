require('../Config/conn')

const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
  name: String,
  price: Number,
  detail: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category'
  },
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'sub_category'
  },
  quantity: Number,
  discount: Number,
  image: String,
})

module.exports = mongoose.model('product', ProductSchema)