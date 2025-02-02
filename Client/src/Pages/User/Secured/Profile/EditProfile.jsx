import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../../../Helpers/Path'

const EditProfile = () => {
  let [userData, setUserData ] = useState({})
  let [allState, setAllState ] = useState([])
  let [allCity, setAllCity ] = useState([])
  useEffect(()=>{
    getUserData()
  }, [])
  const getUserData = async ()=>{
    let response = await axios.get(`${API_URL}/users/user`,{
      headers: {
        Authorization: localStorage.getItem('access-user')
      }
    })
    getAllState(response.data[0].state)
    setUserData(response.data[0])
  }
  let editProfileFrm = useFormik({
    // validationSchema: signUpValidation,
    initialValues: userData,
    onSubmit: async (formData) => {
      console.log('---submit')
      let response = await axios.put(`${API_URL}/users`, formData, {
        headers: {
          Authorization: localStorage.getItem('access-user')
        }
      })
    },
    enableReinitialize: true,
  })
  const getAllState = async (state)=>{
    let response = await axios.get(`${API_URL}/city/getstate`)
    setAllState(response.data)
    stateChangeHandler(state)
  }
  const stateChangeHandler = async (state)=>{
    let response = await axios.get(`${API_URL}/city/getcity/${state}`)
    console.table(response.data)
    setAllCity(response.data)
  }
  return (
    <form onSubmit={editProfileFrm.handleSubmit}>
        <div className="form-theme-custom container form-theme shadow-lg">
          <div className="row">
            <div className='form-header col-md-12 my-3'>
              <h2>Edit You Profile.</h2>
            </div>
            <div className="form-body col-md-12">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input value={editProfileFrm.values.name} name='name' onChange={editProfileFrm.handleChange} type="text" className={"form-control "+(editProfileFrm.errors.name && editProfileFrm.touched.name && 'is-invalid')} id="name" />
                {editProfileFrm.errors.name && editProfileFrm.touched.name && <small style={{color: 'red'}}>{editProfileFrm.errors.name}</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input value={editProfileFrm.values.email} name='email' disabled onChange={editProfileFrm.handleChange} type="email" className={"form-control "+(editProfileFrm.errors.email && editProfileFrm.touched.email && 'is-invalid')} />
                {editProfileFrm.errors.email && editProfileFrm.touched.email && <small style={{color: 'red'}}>{editProfileFrm.errors.email}</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">Contact</label>
                <input value={editProfileFrm.values.contact} name='contact' onChange={editProfileFrm.handleChange} type="text" className={"form-control "+(editProfileFrm.errors.contact && editProfileFrm.touched.contact && 'is-invalid')} id="contact" />
                {editProfileFrm.errors.contact && editProfileFrm.touched.contact && <small style={{color: 'red'}}>{editProfileFrm.errors.contact}</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea value={editProfileFrm.values.address} name='address' row={2} onChange={editProfileFrm.handleChange} className={"form-control "+(editProfileFrm.errors.address && editProfileFrm.touched.address && 'is-invalid')} id="address" rows="3"></textarea>
                {editProfileFrm.errors.address && editProfileFrm.touched.address && <small style={{color: 'red'}}>{editProfileFrm.errors.address}</small>}
              </div>
              <div className="mb-3">
                Gender
                <br />
                {
                  editProfileFrm.values.gender === 'male'
                  &&
                  <>
                    Male <input onChange={editProfileFrm.handleChange} type="radio" checked  name="gender" value="male" />
                    Female <input onChange={editProfileFrm.handleChange} type="radio"  name="gender" value="female" />
                  </>
                }
                {
                  editProfileFrm.values.gender === 'female'
                  &&
                  <>
                    Male <input onChange={editProfileFrm.handleChange} type="radio"  name="gender" value="male" />
                    Female <input onChange={editProfileFrm.handleChange} type="radio" checked name="gender" value="female" />
                  </>
                }
                
                
                <br />
                {editProfileFrm.errors.gender && editProfileFrm.touched.gender && <small style={{color: 'red'}}>{editProfileFrm.errors.gender}</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="state">State</label>
                <select
                value={editProfileFrm.values.state} name='state'
                className={"form-control "+(editProfileFrm.errors.state && editProfileFrm.touched.state && 'is-invalid')}
                onChange={(event) => {
                  stateChangeHandler(event.target.value),
                  editProfileFrm.handleChange(event)
                }}
                >
                  <option>-Select state-</option>
                  {
                    allState.map((state, index) => <option key={index} value={state}>{state}</option>)
                  }
                </select>
                  {editProfileFrm.errors.state && editProfileFrm.touched.state && <small style={{color: 'red'}}>{editProfileFrm.errors.state}</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="city">City</label>
                <select value={editProfileFrm.values.city} name='city' onChange={editProfileFrm.handleChange} className={"form-control "+(editProfileFrm.errors.city && editProfileFrm.touched.city && 'is-invalid')}>
                  <option>-Select city-</option>
                  {
                    allCity.map((city, index) => <option key={index} value={city.name}>{city.name}</option>)
                  }
                </select>
                  {editProfileFrm.errors.city && editProfileFrm.touched.city && <small style={{color: 'red'}}>{editProfileFrm.errors.city}</small>}
              </div>
              <div className='mb-3'>
                <button type="submit" className="form-btn btn signup-btn">
                  Update 
                  {/* {
                    isLoading
                    ?
                    <span className='spinner-border spinner-border-sm' style={{display: 'inline-block', margin: '0 0 0 5px'}}></span>
                    :
                    null
                  } */}
                  </button>
              </div>
            </div>
          </div>
        </div>
      </form>
  )
}

export default EditProfile