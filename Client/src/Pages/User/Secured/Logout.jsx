import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { loggedOut } from '../../../Redux/UserAuthSlice'

const Logout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    localStorage.removeItem('access-user')
    dispatch(loggedOut())
  }, [])
  return (
    <Navigate to='/login' />
  )
}

export default Logout