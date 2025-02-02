import React from 'react'
import { Navigate } from 'react-router-dom'
const Logout = () => {
  localStorage.removeItem('access-admin')
  localStorage.removeItem('type-admin')
  return (
    <Navigate to={'/admin'} />
  )
}

export default Logout