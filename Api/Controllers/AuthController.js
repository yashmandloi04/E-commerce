const router = require('express').Router();
const User = require('../Models/UserModel')
const shaz = require('sha1')
const JWT = require('jsonwebtoken')

router.post('/', async (req, res) => {
  let record = await User.find({ email: req.body.email })
  if (record.length > 0) {
    let enterdPw = await shaz(req.body.password)
    let dbPw = await record[0].password
    if (dbPw === enterdPw) {
      if(record[0].status === true){
        let userData = {
          _id: record[0]._id,
          email: record[0].email,
        }
        let token = JWT.sign(userData, 'keyToSecureData')
        res.send({
          success: true,
          token,
          fullName: record[0].name,
        })
      }else{
        res.send({
          success: false,
          errorType: 3,
        })  
      }
    } else {
      res.send({
        success: false,
        errorType: 2,
      })
    }
  } else {
    res.send({
      success: false,
      errorType: 1,
    })
  }
})

module.exports = router