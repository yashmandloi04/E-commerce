import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../../Helpers/Path'
import { RxUpdate } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

const ViewAdmins = () => {
  let [isLoading, setIsLoading] = useState(false)
  let [adminList, setAdminList] = useState([])
  useEffect(() => {
    getAllAdmins()
  }, [])
  const getAllAdmins = async () => {
    let response = await axios.get(`${API_URL}/customadmin`)
    setAdminList(response.data)
  }
  const adminStatusHandler = async (admin)=>{
    let response = await axios.put(`${API_URL}/customadmin/changestatus/${admin._id}`, {
      status: admin.status
    })
    setAdminList(()=>{
      return adminList.map(mapAdmin => {
        if(mapAdmin._id == admin._id)
          return { ...mapAdmin, status: !(admin.status)}
        return mapAdmin
      })
    })
  }
  return <div className="row">
    <div className="col-md-12">
      <h4>List of all users.</h4>
      {
        isLoading
          ?
          <div className="text-center">
            <div className="spinner-border" style={{ width: '5rem', height: '5rem' }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          :
          <table className="table table-dark my-3 table-striped table-hover">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>User Name</th>
                <th>Master</th>
                <th>Update</th>
                <th>Status</th>

              </tr>
            </thead>
            <tbody>
              {
                adminList.map((admin, index) => <tr key={admin._id}>
                  <td>{index + 1}</td>
                  <td>{admin.username}</td>

                  
                  <td>{admin.type == 1 ? 'Yes' : 'No'}</td>
                  <td><NavLink to={`/admin/setting/customadmin/edit/${admin._id}`}
                    className="btn btn-sm btn-info"
                  ><RxUpdate /></NavLink></td>
                  <td>{admin.status ? <button onClick={() => adminStatusHandler(admin)} className='btn btn-danger'>Deactive</button> : <button onClick={() => adminStatusHandler(admin)} className='btn btn-success'>Active</button>}</td>

                </tr>)
              }
            </tbody>
          </table>
      }
    </div>
  </div>
}

export default ViewAdmins