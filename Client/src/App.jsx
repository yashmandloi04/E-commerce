import React, { useEffect } from 'react'
import AllRoute from './AllRoutes/AllRoute';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { loggedIn, loggedOut } from './Redux/UserAuthSlice';

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    if(localStorage.getItem('access-user'))
      dispatch(loggedIn())
    else
      dispatch(loggedOut())
  }, [])
  return (
    <>
      <AllRoute />
    </>
  )
}

export default App