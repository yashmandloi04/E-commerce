import { useFormik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import NewAdminValidation from '../../../../Schema/Admin/NewAdminSchema'
import axios from 'axios'
import { API_URL } from '../../../../Helpers/Path'
import { useParams } from 'react-router-dom'

const AddAdmin = () => {
  let [iniVal, setIniVal] = useState({})
  const params = useParams()
  useEffect(() => {
    if (params.adminId) {
      getAdminData(params.adminId)
    }
    else {

      setIniVal({
        username: '',
        password: '',
        rePassword: '',
        type: false,
      })
    }
  }, [params])
  const getAdminData = async (adminId) => {
    let response = await axios.get(`${API_URL}/customadmin/${adminId}`)
    setIniVal(response.data[0])
  }
  let userName = useRef('')
  let password = useRef('')
  let rePassword = useRef('')
  let type = useRef(false)
  const AddAdminFrm = useFormik({
    // validationSchema: NewAdminValidation,
    initialValues: iniVal,
    onSubmit: async (FrmData) => {
      if (FrmData.type) FrmData.type = 1 // 1 ---> master admin
      else FrmData.type = 2
      if (params.adminId) {
        await axios.put(`${API_URL}/customadmin/${params.adminId}`, FrmData)
      } else {
        await axios.post(`${API_URL}/customadmin`, FrmData)
      }
      setIniVal({
        username: '',
        password: '',
        rePassword: '',
        type: false,
      })
      type.current.blur()
    },
    enableReinitialize: true,
  })
  return (
    <form onSubmit={AddAdminFrm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card card-border border-dark">
            <div className="card-header bg-dark">
              <h4 className='text-light'>{params.adminId ? 'Update' : 'Create'} Admin.</h4>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="cateName" className="form-label">Username</label>
                <input type="text" value={AddAdminFrm.values.username} ref={userName} onChange={AddAdminFrm.handleChange} name='username' className={`form-control ${AddAdminFrm.errors.username && AddAdminFrm.touched.username && 'is-invalid'}`} />
                {AddAdminFrm.errors.username && AddAdminFrm.touched.username && <small style={{ color: 'red' }}>{AddAdminFrm.errors.username}</small>}
              </div>

              <div className="mb-3">
                <label htmlFor="cateName" className="form-label">Password</label>
                <input type="password" ref={password} onChange={AddAdminFrm.handleChange} name='password' className={`form-control ${AddAdminFrm.errors.password && AddAdminFrm.touched.password && 'is-invalid'}`} />
                {AddAdminFrm.errors.password && AddAdminFrm.touched.password && <small style={{ color: 'red' }}>{AddAdminFrm.errors.password}</small>}
              </div>

              <div className="mb-3">
                <label htmlFor="cateName" className="form-label">Re-Password</label>
                <input type="password" ref={rePassword} onChange={AddAdminFrm.handleChange} name='rePassword' className={`form-control ${AddAdminFrm.errors.rePassword && AddAdminFrm.touched.rePassword && 'is-invalid'}`} />
                {AddAdminFrm.errors.rePassword && AddAdminFrm.touched.rePassword && <small style={{ color: 'red' }}>{AddAdminFrm.errors.rePassword}</small>}
              </div>

              <div className="mb-3">
                <input type="checkbox" ref={type} onChange={AddAdminFrm.handleChange} className="mt-1 mx-2 form-check-input" style={{ border: '1px solid black' }} name="type" id="flexCheckDefault" />
                <label className="form-label" htmlFor="flexCheckDefault">
                  Make master admin.
                </label>
              </div>

            </div>
            <div className="card-footer bg-dark">
              <button type="submit" className="btn btn-light mb-3" >{params.adminId ? 'Update' : 'Create'}</button>
            </div>
          </div>
        </div>
      </div >
    </form>
  )
}

export default AddAdmin