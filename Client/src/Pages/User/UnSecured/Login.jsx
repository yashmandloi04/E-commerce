import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import LoginValidation from '../../../Schema/User/LoginValidation'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { loggedIn } from '../../../Redux/UserAuthSlice'

const Login = () => {
  let state = useSelector(state => state.UserAuthSlice)
  const dispatch = useDispatch()
const navigate = useNavigate()
  useEffect(() => {
    if (state)
      navigate('/profile')
  }, [])
  let [isLoading, setIsLoading] = useState(false)
  let loginFrm = useFormik({
    validationSchema: LoginValidation,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (formData) => {
      setIsLoading(true)
      // http://localhost:5500/api/v1/city/getstate
      axios.post('http://localhost:5500/api/v1/login', formData)
        .then((Response) => {
          setIsLoading(false)
          if (Response.data.success) {
            setErrMesage('')
            localStorage.setItem('access-user', Response.data.token)
            localStorage.setItem('fullName', Response.data.fullName)
            dispatch(loggedIn())
            navigate('/profile')
          } else {
            if (Response.data.errorType === 1) {
              setErrMesage('Invalid Email/Password.')
            } else if(Response.data.errorType === 2) {
              setErrMesage('Invalid Password.')
            } else if (Response.data.errorType === 3){
              setErrMesage('Your account has been deactivated, please contact customer support team, Thank You.')
            }
          }
        })
    },
  })
  let [errMesag, setErrMesage] = useState('')
  return (
    <>
      <div className="form-theme-custom container form-theme shadow-lg">
        <div className="row">
          <div className='form-header col-md-12 my-3'>
            <h2>Create new account</h2>
          </div>

          <form onSubmit={loginFrm.handleSubmit}>
            <div className="form-body col-md-12">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input name='email' onChange={loginFrm.handleChange} type="email" className="form-control" id="email" placeholder="name@example.com" autoComplete='username' />
                {loginFrm.errors.email && loginFrm.touched.email && <small style={{ color: 'red' }}>{loginFrm.errors.email}</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input name='password' onChange={loginFrm.handleChange} type="password" className="form-control" id="password" placeholder="password" autoComplete='current-password' />
                {loginFrm.errors.password && loginFrm.touched.password && <small style={{ color: 'red' }}>{loginFrm.errors.password}</small>}
              </div>
              <div className='mb-3'>
                <button type="submit" className="form-btn btn signup-btn">Login {isLoading && <span className='spinner-border spinner-border-sm' style={{ display: 'inline-block', margin: '0 0 0 5px' }}></span>}</button>
              </div>
            </div>
          </form>
          <div className='text-center mb-4' style={{ color: 'red' }}>{errMesag}</div>
        </div>
      </div>
    </>
  )
}

export default Login