import { useFormik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductValidation from '../../../Schema/Admin/ProductValidation'
import { API_URL } from '../../../Helpers/Path'
import axios from 'axios'

const AddProduct = () => {
  const params = useParams()
  let [categoryList, setCategoryList] = useState([])
  let [subCategoryList, setSubCategoryList] = useState([])
  let [iniVal, setIniVal] = useState({})
  useEffect(() => {
    getCategory()
    if(params.productId){
      getProductById(params.productId)
    }else{
      setIniVal({
        name: '',
        price: '',
        detail: '',
        categoryId: '',
        subCategoryId: '',
        quantity: '',
        discount: '',
        image: '',
      })
    }
  }, [params])
  const getCategory = async () => {
    let response = await axios.get(`${API_URL}/category`)
    setCategoryList(response.data)
  }
  const getProductById = async (productId)=>{
    let response = await axios.get(`${API_URL}/product/${productId}`)
    setIniVal(response.data[0])
    getSubCategory(response.data[0].categoryId)
  }
  const getSubCategory = async (categoryId) => {
    let response = await axios.get(`${API_URL}/subcategory/subcateofcate/${categoryId}`)
    setSubCategoryList(response.data)
  }
  let imgField = useRef('')
  const AddProductFrm = useFormik({
    validationSchema: ProductValidation,
    initialValues: iniVal,
    onSubmit: async (FrmData) => {
      let image = imgField.current.files[0]
      let form = new FormData()
      form.append('image', image)
      form.append('name', FrmData.name)
      form.append('price', FrmData.price)
      form.append('detail', FrmData.detail)
      form.append('categoryId', FrmData.categoryId)
      form.append('subCategoryId', FrmData.subCategoryId)
      form.append('quantity', FrmData.quantity)
      form.append('discount', FrmData.discount)
      if(params.productId){
        let response = await axios.put(`${API_URL}/product/:${params.productId}`, form)
      }else{
        let response = await axios.post(`${API_URL}/product`, form)
      }
      setIniVal({
        name: '',
        price: '',
        detail: '',
        categoryId: '',
        subCategoryId: '',
        quantity: '',
        discount: '',
        image: '',
      })
    },
    enableReinitialize: true,
  })
  return (
    <form onSubmit={AddProductFrm.handleSubmit}>
      <div className="row">
        <div className="col-md-12">
          <h4>{params.productId ? 'Update' : 'Add new'} category.</h4>
        </div>
        <div className="col-md-8 offset-md-2">
          <div className="card card-border border-dark">
            <div className="card-header bg-dark">
              <h4 className='text-light'>{params.productId ? 'Update' : 'Add'} Product from here.</h4>
            </div>
            <div className="card-body">

              <div className="mb-3">
                <label htmlFor="proName" className="form-label">Name</label>
                <input type="text" value={AddProductFrm.values.name}  onChange={AddProductFrm.handleChange} name='name' className={`form-control ${AddProductFrm.errors.name && AddProductFrm.touched.name && 'is-invalid'}`} id="proName" />
                {AddProductFrm.errors.name && AddProductFrm.touched.name && <small style={{ color: 'red' }}>{AddProductFrm.errors.name}</small>}
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="text" value={AddProductFrm.values.price}  onChange={AddProductFrm.handleChange} name='price' className={`form-control ${AddProductFrm.errors.price && AddProductFrm.touched.price && 'is-invalid'}`} id="price" />
                {AddProductFrm.errors.price && AddProductFrm.touched.price && <small style={{ color: 'red' }}>{AddProductFrm.errors.price}</small>}
              </div>

              <div className="mb-3">
                <label htmlFor="proImage" className="form-label">Image</label>
                <input type="file" ref={imgField} value={AddProductFrm.values.image} onChange={AddProductFrm.handleChange} name='image' className={`form-control ${AddProductFrm.errors.image && AddProductFrm.touched.image && 'is-invalid'}`} id="proImage" />
                {AddProductFrm.errors.image && AddProductFrm.touched.image && <small style={{ color: 'red' }}>{AddProductFrm.errors.image}</small>}
              </div>

              <div className="mb-3">
                <label htmlFor="proDetail" className="form-label">Detail</label>
                <textarea type="text" value={AddProductFrm.values.detail}  onChange={AddProductFrm.handleChange} name='detail' className={`form-control ${AddProductFrm.errors.detail && AddProductFrm.touched.detail && 'is-invalid'}`} id="proDetail" > </textarea>
                {AddProductFrm.errors.detail && AddProductFrm.touched.detail && <small style={{ color: 'red' }}>{AddProductFrm.errors.detail}</small>}
              </div>

              <div className="mb-3">
                <label htmlFor="proQuantity" className="form-label">Quantity</label>
                <input type="text" value={AddProductFrm.values.quantity}  onChange={AddProductFrm.handleChange} name='quantity' className={`form-control ${AddProductFrm.errors.quantity && AddProductFrm.touched.quantity && 'is-invalid'}`} id="proQuantity" />
                {AddProductFrm.errors.quantity && AddProductFrm.touched.quantity && <small style={{ color: 'red' }}>{AddProductFrm.errors.quantity}</small>}
              </div>

              <div className="mb-3">
                <label htmlFor="proDiscount" className="form-label">Discount</label>
                <input type="text" value={AddProductFrm.values.discount}  onChange={AddProductFrm.handleChange} name='discount' className={`form-control ${AddProductFrm.errors.discount && AddProductFrm.touched.discount && 'is-invalid'}`} id="proDiscount" />
                {AddProductFrm.errors.discount && AddProductFrm.touched.discount && <small style={{ color: 'red' }}>{AddProductFrm.errors.discount}</small>}
              </div>

              <div className='mb-3'>
                <select name="categoryId"
                value={AddProductFrm.values.categoryId}
                onChange={(event) => {
                  AddProductFrm.handleChange(event)
                  getSubCategory(event.target.value)
                }}
                  className={`form-control ${AddProductFrm.errors.categoryId && AddProductFrm.touched.categoryId && 'is-invalid'}`} id="cateName">
                  Category
                  <option>-Select Category-</option>
                  {
                    categoryList.map((item, index) => <option key={index} value={item._id}>{item.name}</option>)
                  }
                </select>
                {AddProductFrm.errors.CategoryId && AddProductFrm.touched.CategoryId && <small style={{ color: 'red' }}>{AddProductFrm.errors.CategoryId}</small>}
              </div>
              <div className='mb-3'>
                <select name="subCategoryId" 
                value={AddProductFrm.values.subCategoryId}
                onChange={AddProductFrm.handleChange} className={`form-control ${AddProductFrm.errors.subCategoryId && AddProductFrm.touched.subCategoryId && 'is-invalid'}`} id="subCateName">
                  Sub Category
                  <option>-Select Sub-Category-</option>
                  {
                    subCategoryList.map((item, index) => <option key={index} value={item._id}>{item.name}</option>)
                  }
                </select>
                {AddProductFrm.errors.subCategoryId && AddProductFrm.touched.subCategoryId && <small style={{ color: 'red' }}>{AddProductFrm.errors.subCategoryId}</small>}
              </div>
            </div>
            <div className="card-footer bg-dark">
              <button type="submit" className="btn btn-light mb-3" >{params.productId ? 'Update' : 'Add'}</button>
            </div>
          </div>
        </div>
      </div >
    </form>
  )
}

export default AddProduct