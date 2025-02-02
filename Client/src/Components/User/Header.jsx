import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../Helpers/Path'
import { NavLink } from 'react-router-dom'
import './Header.module.css'

import { useSelector } from 'react-redux'

const Header = () => {
  let loggedInState = useSelector(state => state.UserAuthSlice)
  let [cate, setCate] = useState([])
  useEffect(() => {
    getAllCate()
  }, [])
  const getAllCate = async () => {
    let response = await axios.get(`${API_URL}/category/allcategory`)
    setCate(response.data)
  }
  return (
    <>
      {/* <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item"><NavLink to="/" className="nav-link link-dark px-2 active" aria-current="page">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/ourproduct" className="nav-link link-dark px-2">Our Products</NavLink></li>
            <li className="nav-item"><NavLink to="#" className="nav-link link-dark px-2">Category</NavLink></li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">Category <span className="caret"></span></span></NavLink>
              <ul className="dropdown-menu">
                {
                  cate.map(item => <li><NavLink to="#">{item.name}</NavLink></li>)
                }
              </ul>
            </li>
            <li className="nav-item"><NavLink to="/about" className="nav-link link-dark px-2">About</NavLink></li>
          </ul>
          {
            localStorage.getItem('access-user')
              ?
              <>
                <ul className="nav">
                  <li className="nav-item"><NavLink to="/logout" className="nav-link link-dark px-2">Logout</NavLink></li>
                </ul>
              </>
              :
              <>
                <ul className="nav">
                  <li className="nav-item"><NavLink to="/login" className="nav-link link-dark px-2">Login</NavLink></li>
                  <li className="nav-item"><NavLink to="/signup" className="nav-link link-dark px-2">Sign Up</NavLink></li>
                </ul>
              </>
          }

        </div>
      </nav> */}

      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link link-dark px-2" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ourproduct" className="nav-link link-dark px-2">Our Products</NavLink>
            </li>

            {/* Dropdown for Categories */}

            {/* Start */}

            <li className="dropdown">
              <a
                className="nav-item dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textDecoration: 'none', margin: '8px 0' }}
              >
                Category
              </a>

              {/* Main Dropdown */}
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {cate.map((item, index) => (
                  <li key={index} className={item.subcate_data && "dropdown-submenu"}>
                    <NavLink
                      to={`/products/cate/${item._id}`}
                      className={item.subcate_data ? "dropdown-item dropdown-toggle" : "dropdown-item"}
                    >
                      {item.name}
                    </NavLink>

                    {/* Submenu */}
                    {item.subcate_data && (
                      <ul className="dropdown-menu">
                        {item.subcate_data.map((item2, subIndex) => (
                          <li key={subIndex}>
                            <NavLink to={`/products/subCate/${item2._id}`} className="dropdown-item">
                              {item2.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>


            {/* <li className="dropdown">
              <a
                data-mdb-button-init
                data-mdb-ripple-init
                data-mdb-dropdown-init
                href='#'
                className="nav-item dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                style={{ textDecoration: 'none', margin: '8px 0' }}
              >
                Category
              </a>

              
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                {cate.map((item, index) => (
                  <li key={index} className="dropdown-submenu">
                    <NavLink to={`/products/cate/${item._id}`} className="dropdown-item dropdown-toggle">{item.name}</NavLink>
                    
                    <ul className="dropdown-menu">
                      {
                        item.subcate_data
                        &&
                        item.subcate_data.map(item2 => {
                          <li>
                            <NavLink className="dropdown-item" href={`/products/subCate/${item2._id}`}>
                              {item2.name}
                            </NavLink>
                          </li>
                        })
                      }
                    </ul>
                  </li>
                ))}

              </ul>
              <ul className={`dropdown-menu`} aria-labelledby="categoryDropdown">

              </ul>
            </li> */}

            {/* End */}


            <li className="nav-item">
              <NavLink to="/about" className="nav-link link-dark px-2">About</NavLink>
            </li>
          </ul>

          {/* Authentication Links */}
          {loggedInState ? (
            <ul className="nav">
              <li className="nav-item">
                <NavLink to="/logout" className="nav-link link-dark px-2">Logout</NavLink>
              </li>
              <li className='dropdown'>
                <a
                  data-mdb-button-init
                  data-mdb-ripple-init
                  data-mdb-dropdown-init
                  href='#'
                  className="nav-item dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                  style={{ textDecoration: 'none', margin: '8px 0' }}
                >
                  {localStorage.getItem('fullName')}
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {/* <li className="dropdown-submenu">
                    <NavLink to="" className="dropdown-item">My Cart</NavLink>
                  </li> */}
                  <li className="dropdown-submenu">
                    <NavLink to="/profile" className="dropdown-item">My Profile</NavLink>
                  </li>
                  <li className="dropdown-submenu">
                    <NavLink to="/your-orders" className="dropdown-item">My Orders</NavLink>
                  </li>
                  <li className="dropdown-submenu">
                    <NavLink to="/mycart" className="dropdown-item">My Cart</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <ul className="nav">
              <li className="nav-item">
                <NavLink to="/login" className="nav-link link-dark px-2">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signup" className="nav-link link-dark px-2">Sign Up</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mycart" className="nav-link link-dark px-2">My Cart</NavLink>
              </li>

            </ul>
          )}
        </div>
      </nav>


      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-between">
          {/* <NavLinkk to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span className="fs-4">FOODMART</span>
      </NavLinkk> */}
          <div className="col-sm-4 col-lg-3 text-center text-sm-start">
            <div className="main-logo">
              <a href="/">
                <img src="/Assets/images/logo.png" alt="logo" className="img-fluid" />
              </a>
            </div>
          </div>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>
        </div>
      </header>
    </>
  )
}

export default Header