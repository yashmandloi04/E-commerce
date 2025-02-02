import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const UserProtectedModule = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('access-user')){
      navigate('/login')
    }
  },[])
  return <Outlet />
}

export default UserProtectedModule