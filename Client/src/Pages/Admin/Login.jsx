import React, { useState } from 'react'
import AdminLoginValidation from '../../Schema/Admin/AdminLoginValidation'
import { useFormik } from 'formik'
import { API_URL } from '../../Helpers/Path'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let [adminLoginFrmStatus, setAdminLoginFrmStatus] = useState('')
  const navigate = useNavigate()
  const AdminLoginFrm = useFormik({
    validationSchema: AdminLoginValidation,
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (FrmData) => {
      try {
        let response = await axios.post(`${API_URL}/adminauth`, FrmData)
        if (response.data.success) {
          setAdminLoginFrmStatus('')
          localStorage.setItem('access-admin', response.data.token)
          localStorage.setItem('type-admin', response.data.adminType)
          navigate('/admin/dashboard')
        }
      } catch (error) {
        if(error.response.data.errorType === 1){
          setAdminLoginFrmStatus('Username/Password is invalid.')
        }else if(error.response.data.errorType === 2){
          setAdminLoginFrmStatus('Password is invalid.')
        }else{
          setAdminLoginFrmStatus('Master admin has blocked your account.')
        }
      }
    }
  })
  return (
    <form onSubmit={AdminLoginFrm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card card-border border-dark">
            <div className="card-header bg-dark">
              <h4 className='text-light'>Login.</h4>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="cateName" className="form-label">Username</label>
                <input type="text" onChange={AdminLoginFrm.handleChange} name='username' className={`form-control ${AdminLoginFrm.errors.username && AdminLoginFrm.touched.username && 'is-invalid'}`} />
                {AdminLoginFrm.errors.username && AdminLoginFrm.touched.username && <small style={{color: 'red'}}>{AdminLoginFrm.errors.username}</small>}
              </div>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="cateName" className="form-label">Password</label>
                <input type="password" onChange={AdminLoginFrm.handleChange} name='password' className={`form-control ${AdminLoginFrm.errors.password && AdminLoginFrm.touched.password && 'is-invalid'}`} />
                {AdminLoginFrm.errors.password && AdminLoginFrm.touched.password && <small style={{color: 'red'}}>{AdminLoginFrm.errors.password}</small>}
              </div>
              <div className='text-center my-2' style={{color: 'red'}}>{adminLoginFrmStatus}</div>
            </div>
            <div className="card-footer bg-dark">
              <button type="submit" className="btn btn-light mb-3" >Login</button>
            </div>
          </div>
        </div>
      </div >
    </form>
  )
}

export default Login