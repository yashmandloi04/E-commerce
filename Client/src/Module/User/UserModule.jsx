import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/User/Header'
import Footer from '../../Components/User/Footer'
const UserModule = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserModule