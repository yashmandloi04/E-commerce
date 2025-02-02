import * as YUP from 'yup'

const ProductValidation = YUP.object({
  name: YUP.string().required('Name is required.'),
  price: YUP.number().required('Price is required.'),
  detail: YUP.string().required('Detail is required.'),
  categoryId: YUP.string().required('Category is required.'),
  subCategoryId: YUP.string().required('Sub Category is required.'),
  quantity: YUP.number().required('Quantity is required.'),
  discount: YUP.number().required('Discount is required.'),
  image: YUP.string().test('checkIngExt', 'Image must have (.jpg | .jpeg | .png | .webp) extention.', (imgName)=>{
    let temp = imgName.split('.')
    let ext = temp[(temp.length - 1)]
    if(ext == 'jpg' || ext == 'jpeg' || ext == 'png' || ext == 'webp')
       return true
    else
      return false
  }).required('Upload a image of product.'),
})

export default ProductValidation