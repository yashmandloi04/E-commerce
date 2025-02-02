import * as YUP from 'yup'

const SubCategoryValidation = YUP.object({
  name: YUP.string().required('SubCategory name required.'),
  categoryId: YUP.string().required('Please select a category.'),
})

export default SubCategoryValidation