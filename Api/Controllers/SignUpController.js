let router = require('express').Router();
let User = require('../Models/UserModel')
let shaz = require('sha1')

router.post('/', async (req, res) => {
  delete req.body.rePassword
  req.body.password = shaz(req.body.password)
  let result = await User.create(req.body)
  res.send({success: true})
});

router.get('/:email',async (req, res)=>{
  let record = await User.find({email: req.params.email})
  if(record.length === 0){
    res.send(true)
  }else{
    res.send(false)
  } 
})

module.exports = router