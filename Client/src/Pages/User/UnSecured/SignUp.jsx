import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import signUpValidation from '../../../Schema/User/SignUpValidation'

export const SignUp = () => {
  let navigate = useNavigate()
  let [allState, setAllState] = useState([])
  let [allCity, setAllCity] = useState([])
  let [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    axios.get('http://localhost:5500/api/v1/city/getstate')
      .then(Response => setAllState(Response.data))
  }, [])
  let stateChangeHandler = (event) => {
    axios.get(`http://localhost:5500/api/v1/city/getcity/${event.target.value}`)
      .then(Response => setAllCity(Response.data))
  }
  let signUpFrm = useFormik({
    validationSchema: signUpValidation,
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      contact: '',
      address: '',
      gender: '',
      state: '',
      city: '',
    },
    onSubmit: (formData) => {
      // console.log('---submit')
      setIsLoading(true)
      axios.post('http://localhost:5500/api/v1/signup', formData)
        .then((response) => {
          setIsLoading(false)
          navigate('/login')
        })
    },
  })
  return (
    <>
      <form onSubmit={signUpFrm.handleSubmit}>
        <div className="form-theme-custom container form-theme shadow-lg">
          <div className="row">
            <div className='form-header col-md-12 my-3'>
              <h2>Create new account</h2>
            </div>
            <div className="form-body col-md-12">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input name='name' onChange={signUpFrm.handleChange} type="text" className={"form-control "+(signUpFrm.errors.name && signUpFrm.touched.name && 'is-invalid')} id="name" placeholder="John Doe" />
                {signUpFrm.errors.name && signUpFrm.touched.name && <small style={{color: 'red'}}>{signUpFrm.errors.name}</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input name='email' onChange={signUpFrm.handleChange} type="email" className={"form-control "+(signUpFrm.errors.email && signUpFrm.touched.email && 'is-invalid')} />
                {signUpFrm.errors.email && signUpFrm.touched.email && <small style={{color: 'red'}}>{signUpFrm.errors.email}</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input name='password' onChange={signUpFrm.handleChange} type="password" className={"form-control "+(signUpFrm.errors.password && signUpFrm.touched.password && 'is-invalid')} />
                {signUpFrm.errors.password && signUpFrm.touched.password && <small style={{color: 'red'}}>{signUpFrm.errors.password}</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="rePassword" className="form-label">Re-Password</label>
                <input name='rePassword' onChange={signUpFrm.handleChange} type="password" className={"form-control "+(signUpFrm.errors.rePassword && signUpFrm.touched.rePassword && 'is-invalid')} />
                {signUpFrm.errors.rePassword && signUpFrm.touched.rePassword && <small style={{color: 'red'}}>{signUpFrm.errors.rePassword}</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">Contact</label>
                <input name='contact' onChange={signUpFrm.handleChange} type="text" className={"form-control "+(signUpFrm.errors.contact && signUpFrm.touched.contact && 'is-invalid')} id="contact" placeholder="contact" />
                {signUpFrm.errors.contact && signUpFrm.touched.contact && <small style={{color: 'red'}}>{signUpFrm.errors.contact}</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea name='address' row={2} onChange={signUpFrm.handleChange} className={"form-control "+(signUpFrm.errors.address && signUpFrm.touched.address && 'is-invalid')} id="address" rows="3"></textarea>
                {signUpFrm.errors.address && signUpFrm.touched.address && <small style={{color: 'red'}}>{signUpFrm.errors.address}</small>}
              </div>
              <div className="mb-3">
                Gender
                <br />
                Male <input onChange={signUpFrm.handleChange} type="radio" name="gender" value="male" />
                Female <input onChange={signUpFrm.handleChange} type="radio" name="gender" value="female" />
                <br />
                {signUpFrm.errors.gender && signUpFrm.touched.gender && <small style={{color: 'red'}}>{signUpFrm.errors.gender}</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="state">State</label>
                <select
                name='state'
                className={"form-control "+(signUpFrm.errors.state && signUpFrm.touched.state && 'is-invalid')}
                onChange={(event) => {
                  stateChangeHandler(event),
                  signUpFrm.handleChange(event)
                }}
                >
                  <option>-Select state-</option>
                  {
                    allState.map(state => <option key={state} value={state}>{state}</option>)
                  }
                </select>
                  {signUpFrm.errors.state && signUpFrm.touched.state && <small style={{color: 'red'}}>{signUpFrm.errors.state}</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="city">City</label>
                <select name='city' onChange={signUpFrm.handleChange} className={"form-control "+(signUpFrm.errors.city && signUpFrm.touched.city && 'is-invalid')}>
                  <option>-Select city-</option>
                  {
                    allCity.map(city => <option key={city.name} value={city.name}>{city.name}</option>)
                  }
                </select>
                  {signUpFrm.errors.city && signUpFrm.touched.city && <small style={{color: 'red'}}>{signUpFrm.errors.city}</small>}
              </div>
              <div className='mb-3'>
                <button type="submit" className="form-btn btn signup-btn">
                  Sign Up 
                  {
                    isLoading
                    ?
                    <span className='spinner-border spinner-border-sm' style={{display: 'inline-block', margin: '0 0 0 5px'}}></span>
                    :
                    null
                  }
                  </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default SignUp