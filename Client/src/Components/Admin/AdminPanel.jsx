import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './AdminPanel.module.css'
import { AiOutlineDashboard } from "react-icons/ai"
import { BiCategoryAlt } from "react-icons/bi"
import { FaUsers } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { FaBorderStyle } from "react-icons/fa";

const AdminPanel = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {/* Sidebar */}
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-light min-vh-100">
            {/* Administrator Title */}
            <span className="fs-5 d-none d-sm-inline">Administrator</span>

            {/* Navigation Menu */}
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              {/* Dashboard Link */}
              <li className={`nav-item lh-lg ${styles.admin_panel_a}`}>
                <NavLink
                  to="/admin/dashboard"
                  className={`text-decoration-none align-middle px-0 ${styles.admin_panel_a}`}
                >
                  <span><AiOutlineDashboard size={25} /></span>
                  <span className={`ms-1 d-none d-sm-inline ${styles.admin_panel_a}`}>Dashboard</span>
                </NavLink>
              </li>

              {/* Users Link */}
              <li className={`nav-item lh-lg ${styles.admin_panel_a}`}>
                <NavLink to="/admin/users" className="text-decoration-none align-middle px-0">
                  <span><FaUsers size={25} /></span>
                  <span className="ms-1 d-none d-sm-inline">Users</span>
                </NavLink>
              </li>

              <li className={`nav-item lh-lg ${styles.admin_panel_a}`}>
                <NavLink to="/admin/orders" className="text-decoration-none align-middle px-0">
                  <span><FaBorderStyle size={25} /></span>
                  <span className="ms-1 d-none d-sm-inline">Orders</span>
                </NavLink>
              </li>

              {/* Category Menu */}
              <li className={`nav-item lh-lg ${styles.admin_panel_a}`}>
                <a
                  href="#categoryMenu"
                  data-bs-toggle="collapse"
                  data-bs-target="#categoryMenu"
                  className={`nav-link px-0 align-middle ${styles.dropdown_link}`}
                >
                  <span><BiCategoryAlt size={25} /></span>
                  <span className="ms-1 d-none d-sm-inline">Category</span>
                </a>
                <ul id='categoryMenu' className={`collapse nav flex-column ms-1 ${styles.dropdown_menu}`} data-bs-parent="#menu">
                  <li className="w-100">
                    <NavLink to="/admin/category/add" className={`${styles.panel_Item} px-2`}>
                      <span className="d-none d-sm-inline">Add</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin/category/view" className={`${styles.panel_Item} px-2`}>
                      <span className="d-none d-sm-inline">View</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/* Sub-Category Menu */}
              <li className={`nav-item lh-lg ${styles.admin_panel_a}`}>
                <a
                  href="#categoryMenu"
                  data-bs-toggle="collapse"
                  data-bs-target="#subCategooryMenu"
                  className={`nav-link px-0 align-middle ${styles.dropdown_link}`}
                >
                  <span><MdCategory size={25} /></span>
                  <span className="ms-1 d-none d-sm-inline">Sub Category</span>
                </a>
                <ul id='subCategooryMenu' className={`collapse nav flex-column ms-1 ${styles.dropdown_menu}`} data-bs-parent="#menu">
                  <li className="w-100">
                    <NavLink to="/admin/subcategory/add" className={`${styles.panel_Item} px-2`}>
                      <span className="d-none d-sm-inline">Add</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin/subcategory/view" className={`${styles.panel_Item} px-2`}>
                      <span className="d-none d-sm-inline">View</span>
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Product Menu */}
              <li className={`nav-item lh-lg ${styles.admin_panel_a}`}>
                <a
                  href="#productMenu"
                  data-bs-toggle="collapse"
                  data-bs-target="#productMenu"
                  className={`nav-link px-0 align-middle ${styles.dropdown_link}`}
                >
                  <span><FaProductHunt size={25} /></span>
                  <span className="ms-1 d-none d-sm-inline">Product</span>
                </a>
                <ul id='productMenu' className={`collapse nav flex-column ms-1 ${styles.dropdown_menu}`} data-bs-parent="#menu">
                  <li className="w-100">
                    <NavLink to="/admin/product/add" className={`${styles.panel_Item} px-2`}>
                      <span className="d-none d-sm-inline">Add</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin/product/view" className={`${styles.panel_Item} px-2`}>
                      <span className="d-none d-sm-inline">View</span>
                    </NavLink>
                  </li>
                </ul>
              </li>

            </ul>

            <hr />

            {/* User Dropdown */}
            <div className="dropdown pb-4">
            <button
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle bg-transparent border-0"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="User Avatar"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline mx-1">loser</span>
              </button>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                {
                  localStorage.getItem('type-admin') == 1
                  ?
                  <>
                    <li>
                      <NavLink className="dropdown-item" to="/admin/setting">Settings</NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </>
                  :
                  ''
                }
                <li>
                  <NavLink className="dropdown-item" to='/admin/logout'>Sign out</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-md-9 py-3">
          <Outlet />
        </div>
      </div>
    </div>

  )
}


export default AdminPanel