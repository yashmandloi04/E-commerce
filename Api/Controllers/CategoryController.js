const router = require('express').Router()
const Category = require('../Models/CategoryModel')
const SubCategory = require('../Models/SubCategoryModel')

router.get('/', async (req, res)=>{
  let allCategory = await Category.find()
  res.send(allCategory)
})

router.get('/sort', async(req, res)=>{
  let accSortedCategory = await Category.find().sort('name').exec()
  res.send(accSortedCategory)
})

router.get('/allcategory', async(req, res)=>{
  let category_result = await Category.find()
  let result = await Promise.all(category_result.map(async (cate) => {
    let subcate_result = await SubCategory.find({ categoryId: cate._id})
    return { _id:cate._id, name: cate.name, subcate_data: subcate_result }
  }))
  res.send(result)
})

router.get('/:id', async (req, res)=>{
  let idCategory = await Category.find({_id: req.params.id})
  res.send(idCategory)
})
router.post('/', async (req, res)=>{
  let addedCategory = await Category.create(req.body)
  res.send(addedCategory)
})
router.put('/:id', async (req, res)=>{
  let updatedCategory = await Category.updateMany({_id: req.params.id}, req.body)
  res.send(updatedCategory)
})
router.delete('/:id', async (req, res)=>{
  let deletedCategory = await Category.deleteMany({_id: req.params.id})
  await SubCategory.deleteMany({categoryId: req.params.id})
  res.send(deletedCategory)
})

module.exports = router