import axios from 'axios'
import { useFormik } from 'formik'
import React, { useRef, useState } from 'react'
import { API_URL } from '../../../../Helpers/Path'

const ChangePw = () => {
  let [changeStatus, setChangeStatus] = useState('')
  let curPwField = useRef('')
  let pwField = useRef('')
  let rePwField = useRef('')
  let ChangePwFrm = useFormik({
    initialValues: {
      curPw: '',
      password: '',
      rePassword: '',
    },
    onSubmit: async (FrmData)=>{
      console.log(FrmData)
      let response = await axios.put(`${API_URL}/users/changepw`, FrmData, {
        headers: {
          Authorization: localStorage.getItem('access-user')
        }
      })
      console.log(Response)
      if(response.data.success){
        setChangeStatus('')
        curPwField.current.value = ''
        pwField.current.value = ''
        rePwField.current.value = ''
      }else{
        setChangeStatus('Current password does not matched.')
      }
    }
  })
  return <form onSubmit={ChangePwFrm.handleSubmit}>
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card card-border border-dark">
          <div className="card-header bg-dark">
            <h4 className='text-light'>Change Password.</h4>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="cateName" className="form-label">curPw</label>
              <input type="password" value={ChangePwFrm.values.curPw} ref={curPwField} onChange={ChangePwFrm.handleChange} name='curPw' className={`form-control ${ChangePwFrm.errors.curPw && ChangePwFrm.touched.curPw && 'is-invalid'}`} />
              {ChangePwFrm.errors.curPw && ChangePwFrm.touched.curPw && <small style={{ color: 'red' }}>{ChangePwFrm.errors.curPw}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="cateName" className="form-label">Password</label>
              <input type="password" ref={pwField} onChange={ChangePwFrm.handleChange} name='password' className={`form-control ${ChangePwFrm.errors.password && ChangePwFrm.touched.password && 'is-invalid'}`} />
              {ChangePwFrm.errors.password && ChangePwFrm.touched.password && <small style={{ color: 'red' }}>{ChangePwFrm.errors.password}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="cateName" className="form-label">Re-Password</label>
              <input type="password" ref={rePwField} onChange={ChangePwFrm.handleChange} name='rePassword' className={`form-control ${ChangePwFrm.errors.rePassword && ChangePwFrm.touched.rePassword && 'is-invalid'}`} />
              {ChangePwFrm.errors.rePassword && ChangePwFrm.touched.rePassword && <small style={{ color: 'red' }}>{ChangePwFrm.errors.rePassword}</small>}
            </div>

          </div>
          <div className="card-footer bg-dark">
            <button type="submit" className="btn btn-light mb-3" >Change</button>
          </div>
          <div>
          <small style={{color: 'red'}} className='text-center'>{changeStatus && changeStatus}</small>
          </div>
        </div>
      </div>
    </div >
  </form>
}

export default ChangePw