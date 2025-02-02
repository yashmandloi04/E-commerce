const router = require('express').Router()
const User = require('../Models/UserModel')
const JWT = require('jsonwebtoken')
const shaz = require('sha1')

router.get('/', async (req, res)=>{
  let allUser = await User.find()
  res.send(allUser)
})

router.get('/user', async (req, res)=>{
  let token = req.headers.authorization
  let objId = JWT.decode(token, require('../Config/Access_Secret'))
  let idUser = await User.find({_id: objId._id})
  // console.log(idUser)
  res.send(idUser)
})

router.put('/', async (req, res)=>{
  let token = req.headers.authorization
  let objId = JWT.decode(token, 'keyToSecureData')
  let idUser = await User.updateMany({ _id: objId._id }, req.body)
  res.send(idUser)
})

router.put('/changepw', async (req, res)=>{
  let token = req.headers.authorization
  let objId = JWT.decode(token, 'keyToSecureData')
  let user = await User.findOne({ _id: objId._id })
  if(user.password == shaz(req.body.curPw)){
    await User.updateMany({_id: objId._id}, {
      password: shaz(req.body.password)
    })
    res.send({
      success: true, 
    })
  }else{
    res.send({
      success: false,
      errorType: 1,
    })
  }
})

router.put('/changestatus/:id', async (req, res)=>{
  let response = await User.updateOne(
    {_id: req.params.id},
    {status: req.body.status}
  )
  res.send(response)
})
module.exports = router