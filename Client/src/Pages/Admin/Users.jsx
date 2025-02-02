import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../Helpers/Path'

const Users = () => {
  let [userList, setUserList] = useState([])
  let [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${API_URL}/users`)
      .then(Response => {
        setIsLoading(false)
        setUserList(Response.data)
      })
  }, [])
  const userStatusHandler = async (user)=>{
    console.log('UserStatusHandler Called')
    let newStatus
    if(user.status){
      newStatus = false
    }else{
      newStatus = true
    }
    let response = await axios.put(`${API_URL}/users/changestatus/${user._id}`, {
      status: newStatus,
    })
    if(response.request.status === 200){
      setUserList(()=>{
        return userList.map(mapUser => {
          if(mapUser._id == user._id){
            return { ...mapUser, status: newStatus}
          }
          return mapUser
        })
      })
    }
  }
  return (
    // <div className="container my-4">
    <div className="row">
      <div className="col-md-12">
        <h4>List of all users.</h4>
        {
          isLoading
            ?
            <div className="text-center">
              <div className="spinner-border" style={{width: '5rem', height: '5rem'}} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            </div>
            :
            <table className="table table-dark my-3 table-striped table-hover">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  userList.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.contact}</td>
                      <td>{item.status ? <button onClick={()=>userStatusHandler(item)} className='btn btn-danger'>Deactive</button> : <button onClick={()=>userStatusHandler(item)} className='btn btn-success'>Active</button>}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
        }
      </div>
    </div>
    // </div>
  )
}

export default Users