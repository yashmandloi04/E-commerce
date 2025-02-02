import React, { useEffect } from 'react'
import SettingNav from '../../../Components/Admin/SettingNav'
import { useNavigate } from 'react-router-dom'

const Setting = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    // console.log(`admin-type=${localStorage.getItem('type-admin')}`)
    if(!(localStorage.getItem('type-admin') == 1)){
      navigate('/admin/dashboard')
    }
  },[])
  return (
    <SettingNav />
  )
}

export default Setting