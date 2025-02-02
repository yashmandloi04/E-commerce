import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const SettingNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Admins</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown08">
                  <li><NavLink className="dropdown-item" to="/admin/setting/customadmin/add">Add</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/admin/setting/customadmin/view">View</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='flex justify-content-center align-items-center'>
        <Outlet />
      </div>
    </>
  )
}

export default SettingNav