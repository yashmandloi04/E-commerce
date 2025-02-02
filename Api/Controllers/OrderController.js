const router = require('express').Router()
const Order = require('../Models/OrderModel')
const JWT = require('jsonwebtoken')
const random = require('random-string-generator')

router.get('/', async (req, res) => {
  let response = await Order.find().populate('product_id').populate('user_id').exec()
  res.send(response)
})

router.get('/userid', async (req, res) => {
  let token = req.headers.authorization
  let objId = JWT.decode(token, 'keyToSecureData')
  let response = await Order.find({ user_id: objId._id }).populate('product_id').populate('user_id').exec()
  res.send(response)
})

router.get('/:id', async (req, res) => {
  let response = await Order.find({ _id: req.params.id }).populate('product_id').populate('user_id').exec()
  res.send(response)
})

router.put('/cancel/:id', async (req, res) => {
  let response = await Order.updateMany({ _id: req.params.id }, { cancel_status: 2 })
  res.send(response)
})

router.post('/', async (req, res) => {
  if (!Array.isArray(req.body.product_id)) {
    let token = req.headers.authorization
    let objId = JWT.decode(token, 'keyToSecureData')
    let invoiceId = random('numeric').substring(0, 4)

    let ordObj = {
      contact: req.body.contact,
      address: req.body.address,
      product_id: req.body.product_id,
      mode: req.body.mode,
      user_id: objId._id,
      invoice_id: invoiceId,
    }

    let response = await Order.create(ordObj)

    res.send(response)

  } else {
    let products = [...req.body.product_id]
    let token = req.headers.authorization
    let objId = JWT.decode(token, 'keyToSecureData')

    let finalObj = await Promise.all(products.map(async (product) => {
      let invoiceId = random('numeric').substring(0, 4)
      return {
        contact: req.body.contact,
        address: req.body.address,
        product_id: product._id,
        mode: req.body.mode,
        user_id: objId._id,
        invoice_id: invoiceId,
      }
    }))
    let response = await Order.insertMany(finalObj)
    res.send(response)
  }
})

module.exports = router