import React, { useEffect, useState, useRef } from 'react'
import { API_URL } from '../../../Helpers/Path'
import axios from 'axios'
import { useFormik } from 'formik'
import CategoryValidation from '../../../Schema/Admin/CategoryValidation'
import { useParams } from 'react-router-dom'

const AddCategory = () => {
  const params = useParams()
  useEffect(()=>{
    if(params.cateId){
      getCategoryById(params.cateId)
    }else{
      setCate({ ...cate, name: '' })
    }
  }, [params])
  let [cate, setCate ] = useState({})
  let cateField = useRef('')
  const getCategoryById = async (cateId)=>{
    console.log(cate)
    let response = await axios.get(`${API_URL}/category/${cateId}`)
    setCate(response.data[0])
  }
  let AddCateFrm = useFormik({
    validationSchema: CategoryValidation,
    initialValues: cate,
    onSubmit: (FrmData) => {
      params.cateId
      ?
      axios.put(`${API_URL}/category/${params.cateId}`,FrmData)
        .then(Response => {
          console.log(Response.data)
          cateField.current.value = ''
        })
        :
      axios.post(`${API_URL}/category`,FrmData)
        .then(Response => {
          console.log(Response.data)
          cateField.current.value = ''
        })

    },
    enableReinitialize: true,
  })
  return (
    <form onSubmit={AddCateFrm.handleSubmit}>
      <div className="row">
        <div className="col-md-12">
          <h4>{params.cateId ? 'Update' : 'Add new'} category.</h4>
        </div>
        <div className="col-md-6 offset-md-3">
          <div className="card card-border border-dark">
            <div className="card-header bg-dark">
              <h4 className='text-light'>Add category from here.</h4>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="cateName" className="form-label">Category Name</label>
                <input type="text" ref={cateField} value={AddCateFrm.values.name} onChange={AddCateFrm.handleChange} name='name' className={`form-control ${AddCateFrm.errors.name && AddCateFrm.touched.name && 'is-invalid'}`} id="cateName" />
              { AddCateFrm.errors.name && AddCateFrm.touched.name && <small style={{color: 'red'}} >{AddCateFrm.errors.name}</small>}
              </div>
            </div>
            <div className="card-footer bg-dark">
                <button type="submit" className="btn btn-light mb-3" >{params.cateId ? 'Update' : 'Add'}</button>
            </div>
          </div>
        </div>
      </div >
    </form>
  )
}

export default AddCategory