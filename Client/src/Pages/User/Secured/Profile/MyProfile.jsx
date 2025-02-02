import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../../Helpers/Path'
import { NavLink } from 'react-router-dom'

const MyProfile = () => {
  let [userData, setUserData] = useState({})
  let [isLoadind, setIsLoading] = useState(false)
  useEffect(() => {
    getUserData()
  }, [])
  const getUserData = async () => {
    setIsLoading(true)
    let response = await axios.get(`${API_URL}/users/user`, {
      headers: {
        Authorization: localStorage.getItem('access-user')
      }
    })
    setIsLoading(false)
    setUserData(response.data[0])
  }
  return (
    userData.name === ''
      ?
      <div class="text-center">
        <div class="spinner-border" style={{ width: '5rem', height: '5rem' }} role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      :
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <h1>User Profile</h1>
              <h6><NavLink style={{color: 'blue'}} to={'/profile/edit'}>Edit Profile</NavLink></h6>
              <h6><NavLink style={{color: 'blue'}} to={'/profile/changepw'}>Change Password</NavLink></h6>
            </div>
            <table className='w-full table table-striped table-hover table-bordered '>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{userData.name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{userData.email}</td>
                </tr>
                <tr>
                  <th>Contact</th>
                  <td>{userData.contact}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{userData.address}</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>{userData.name}</td>
                </tr>
                <tr>
                  <th>State</th>
                  <td>{userData.state}</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>{userData.city}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default MyProfile