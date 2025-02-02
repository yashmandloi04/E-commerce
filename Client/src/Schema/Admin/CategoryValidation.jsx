import * as YUP from 'yup'

const CategoryValidation = YUP.object({
  name: YUP.string().required('Category name required.'),
})

export default CategoryValidation