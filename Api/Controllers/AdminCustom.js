const router = require('express').Router()
const Admin = require('../Models/AdminModel')
const Shaz = require('sha1')

router.get('', async (req, res)=>{
  let record = await Admin.find({})
  res.send(record)
})

router.get('/:adminId', async (req, res)=>{
  let record = await Admin.find({ _id: req.params.adminId })
  res.send(record)
})

router.put('/changestatus/:adminId', async (req, res)=>{
  // console.log('Get api called.')
  let updatedStatus
  if(req.body.status == true)
    updatedStatus = false
  else
    updatedStatus = true
  let record = await Admin.findByIdAndUpdate(
    { _id: req.params.adminId },
    { status: updatedStatus}
  )
  res.send({
    success: true,
  })
})

router.put('/:adminId', async (req, res)=>{
  req.body.password = Shaz(req.body.password)
  let record = await Admin.updateMany({ _id: req.params.adminId }, req.body)
  res.send(record)
})

router.post('/', async (req, res) => {
  delete req.body.rePassword
  req.body.password = Shaz(req.body.password)
  let result = await Admin.create(req.body)
  res.send({
    success: true,
  })
})

module.exports = router