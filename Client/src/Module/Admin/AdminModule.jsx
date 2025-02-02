import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminPanel from '../../Components/Admin/AdminPanel'

const AdminModule = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('access-admin')) {
      navigate('/')
    }
  }, [])
  return (
    <div className='d-flex'>
      <AdminPanel />
    </div>
  )
}

export default AdminModule