require('../Config/conn')
const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
  product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product',
    },
  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  order_date:{
    type: Date,
    default: new Date(),
  },
  cancel_status:{
    type: Number,
    default: 0,
  },
  invoice_id: String,
  contact: Number,
  address: String,
  mode: String,
})

module.exports = mongoose.model('order', OrderSchema)