const router = require('express').Router()
const Admin = require('../Models/AdminModel')
const Shaz = require('sha1')
const JWT = require('jsonwebtoken')
const { ACCESS_SECRET_KEY } = require('../Config/Access_Secret')

router.post('/', async (req, res) => {
  let { username, password } = req.body
  let record = await Admin.find({ username: username })
  if (record.length) {
    if (record[0].status) {
      if (record[0].password === Shaz(password)) {
        let token = JWT.sign({
          _id: record[0]._id,
        }, ACCESS_SECRET_KEY)
        res.status(200).json({
          success: true,
          token,
          adminType: record[0].type,
        })
      } else {
        res.status(401).json({
          success: false,
          errorType: 2,
        })
      }
    } else {
      res.status(401).json({
        success: false,
        errorType: 3,
      })
    }
  } else {
    res.status(401).json({
      success: false,
      errorType: 1,
    })
  }
})

module.exports = router