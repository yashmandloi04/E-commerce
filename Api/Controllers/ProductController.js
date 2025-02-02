const router = require('express').Router()
const Product = require('../Models/ProductModel')
const random = require('random-string-generator')
const path = require('path')

router.get('/', async (req, res) => {
  let allProduct = await Product.find().populate('categoryId').populate('subCategoryId').exec()
  res.send(allProduct)
})

router.get('/cate/:cateId', async (req, res) => {
  let idProduct = await Product.find({ categoryId: req.params.cateId }).populate('categoryId').populate('subCategoryId').exec()
  res.send(idProduct)
})

router.get('/subCate/:subCateId', async (req, res) => {
  let idProduct = await Product.find({ subCategoryId: req.params.subCateId }).populate('categoryId').populate('subCategoryId').exec()
  res.send(idProduct)
})

router.get('/:id', async (req, res) => {
  let idProduct = await Product.find({ _id: req.params.id }).populate('categoryId').populate('subCategoryId').exec()
  res.send(idProduct)
})
router.post('/', async (req, res) => {
  // Here debug why req.files not have image.
  let image = req.files.image
  let temp = image.name.split('.')
  let newName = random('alphanumeric')+'.'+temp[(temp.length - 1)]
  let imgPath = `${path.resolve()}/assets/product-images/${newName}`
  await image.mv(imgPath, (err)=>{
    if(err)
      console.log(err)
  })
  req.body.image = newName
  let response = await Product.create(req.body)
  res.send(response)
})
router.put('/:id', async (req, res) => {
  await Product.updateMany({ _id: req.params.id }, req.body)
  res.send({
    success: true,
  })
})
router.delete('/:id', async (req, res) => {
  await Product.deleteMany({ _id: req.params.id })
  res.send({
    success: true,
  })
})

module.exports = router