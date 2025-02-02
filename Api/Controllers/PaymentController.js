const router = require('express').Router()
const crypto = require('crypto')
const Product = require('../Models/ProductModel')
const createRazorpayInstance = require('../Config/razorpay.conn')
const razorpayInstance = createRazorpayInstance()

router.post('/createOrder', async (req, res)=>{
  const { product_id } = req.body  

  const proDetail = await Product.findOne({ _id: product_id })

  const options = {
    amount: proDetail.price * 100,
    currency: 'INR',
    receipt: 'order_rcptid_11'
  }

  try {
    razorpayInstance.orders.create(options, (err, order)=>{
      if(err){
        res.status(500).json({
          success: false,
          message: 'Something went wrong.'
        })
      }else{
        res.status(201).json(order)
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong.'
    })
  }

})

router.post('/verifyPayment', async (req, res)=>{
  const { order_id, payment_id, signature } = req.body

  const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
  hmac.update(order_id + '|' + payment_id)
  const generateSignature = hmac.digest('hex')

  if(generateSignature == signature){
    res.status(200).json({
      success: true,
      message: 'Payment successful.'
    })
  }else{
    res.status(400).json({
      success: false,
      message: 'Payment failed.'
    })
  }
})

module.exports = router