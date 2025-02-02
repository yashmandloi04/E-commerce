import React, { useEffect, useState, useRef } from 'react'
import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'
import SubCategoryValidation from '../../../Schema/Admin/SubCategoryValidaion'
import axios from 'axios'
import { API_URL } from '../../../Helpers/Path'
import SryNotFound from '../../../Components/Admin/ChildProps/SryNotFound'

const AddSubCategory = () => {
  const params = useParams()
  let subCateField = useRef('')
  let [categoryList, setCategoryList] = useState([])
  let [iniVal, setIniVal] = useState({})
  useEffect(() => {
    getCategoryList()
    if(params.subCateId){
      getInitialValues(params.subCateId)
    }else{
      setIniVal({
        name: '',
        categoryId: '',
      })
    }
  }, [params])
  const getCategoryList = async ()=>{
    let response = await axios.get(`${API_URL}/category`)
    setCategoryList(response.data)
  }
  const getInitialValues = async (subCateId)=>{
    let response = await axios.get(`${API_URL}/subcategory/${subCateId}`)
    setIniVal(response.data[0])
  }
  let AddSubCateFrm = useFormik({
    validationSchema: SubCategoryValidation,
    initialValues: iniVal,
    onSubmit: async (FrmData) => {
      if(params.subCateId){
        await axios.put(`${API_URL}/subcategory/${params.subCateId}`, FrmData)
        setIniVal({
          name: '',
          categoryId: '',
        })
      }else{
        await axios.post(`${API_URL}/subcategory`, FrmData)
      subCateField.current.value = ''
      }
    },
    enableReinitialize: true,
  })
  return (
    <form onSubmit={AddSubCateFrm.handleSubmit}>
      <div className="row">
        <div className="col-md-12">
          <h4>{params.subCateId ? 'Update' : 'Add new'} category.</h4>
        </div>
        <div className="col-md-6 offset-md-3">
          <div className="card card-border border-dark">
            <div className="card-header bg-dark">
              <h4 className='text-light'>{params.subCateId ? 'Update' : 'Add'} sub category from here.</h4>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="cateName" className="form-label">Sub-Category Name</label>
                <input type="text" ref={subCateField} value={AddSubCateFrm.values.name} onChange={AddSubCateFrm.handleChange} name='name' className={`form-control ${AddSubCateFrm.errors.name && AddSubCateFrm.touched.name && 'is-invalid'}`} id="cateName" />
                {AddSubCateFrm.errors.name && AddSubCateFrm.touched.name && <small style={{ color: 'red' }}>{AddSubCateFrm.errors.name}</small>}
              </div>
              <div className='mb-3'>
                <select name="categoryId" value={AddSubCateFrm.values.categoryId} onChange={AddSubCateFrm.handleChange} className={`form-control ${AddSubCateFrm.errors.categoryId && AddSubCateFrm.touched.categoryId && 'is-invalid'}`} id="cateName">
                  Sub Category
                  <option>-Select Category-</option>
                  {
                    categoryList.map((item, index) => <option key={index} value={item._id}>{item.name}</option>)
                  }
                </select>
                {AddSubCateFrm.errors.CategoryId && AddSubCateFrm.touched.CategoryId && <small style={{ color: 'red' }}>{AddSubCateFrm.errors.CategoryId}</small>}
              </div>
            </div>
            <div className="card-footer bg-dark">
              <button type="submit" className="btn btn-light mb-3" >{params.subCateId ? 'Update' : 'Add'} </button>
            </div>
          </div>
        </div>
      </div >
    </form>
  )
}

export default AddSubCategory