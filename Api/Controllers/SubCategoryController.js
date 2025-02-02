const router = require('express').Router()
const SubCategory = require('../Models/SubCategoryModel')

router.get('/', async (req, res)=>{
  let allSubCategory = await SubCategory.find().populate('categoryId')
  res.send(allSubCategory)
})

router.get('/sort', async(req, res)=>{
  let accSortedCategory = await SubCategory.find().sort({'categoryId': 1}).populate('categoryId').exec()
  res.send(accSortedCategory)
})

router.get('/subcateofcate/:id', async (req, res)=>{
  let idSubCategory = await SubCategory.find({categoryId: req.params.id})
  res.send(idSubCategory)
})

router.get('/:id', async (req, res)=>{
  let idSubCategory = await SubCategory.find({_id: req.params.id})
  res.send(idSubCategory)
})
router.post('/', async (req, res)=>{
  let addedSubCategory = await SubCategory.create(req.body)
  res.send(addedSubCategory)
})

router.put('/:id', async (req, res)=>{
  let updatedSubCategory = await SubCategory.updateMany({_id: req.params.id}, req.body)
  res.send(updatedSubCategory)
})
router.delete('/:id', async (req, res)=>{
  let deletedSubCategory = await SubCategory.deleteMany({_id: req.params.id})
  res.send(deletedSubCategory)
})




module.exports = router