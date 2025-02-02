import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/User/UnSecured/Home'
import About from '../Pages/User/UnSecured/About'
import OurProduct from '../Pages/User/UnSecured/OurProduct'
import SignUp from '../Pages/User/UnSecured/SignUp'
import Login from '../Pages/User/UnSecured/Login'
import ProductDetail from '../Pages/User/UnSecured/ProductDetail'
import BuyNow from '../Pages/User/Secured/BuyNow'
import OrderSuccess from '../Pages/User/Secured/OrderSuccess'
import YourOrders from '../Pages/User/Secured/YourOrders'
import AdminLogin from '../Pages/Admin/Login'
import MyProfile from '../Pages/User/Secured/Profile/MyProfile'
import EditProfile from '../Pages/User/Secured/Profile/EditProfile'
import Logout from '../Pages/User/Secured/Logout'
import UserModule from '../Module/User/UserModule'
import AdminModule from '../Module/Admin/AdminModule'
import UserProtectedModule from '../Module/User/UserProtectedModule'
import Dashboard from '../Pages/Admin/Dashboard'
import Setting from '../Pages/Admin/Settings/Setting'
import AddCategory from '../Pages/Admin/Category/AddCategory'
import ViewCategory from '../Pages/Admin/Category/ViewCategory/ViewCategory'
import AddProduct from '../Pages/Admin/Product/AddProduct'
import ViewProduct from '../Pages/Admin/Product/ViewProduct/ViewProduct'
import Users from '../Pages/Admin/Users'
import AddSubCategory from '../Pages/Admin/SubCategory/AddSubCategory'
import ViewSubCategory from '../Pages/Admin/SubCategory/ViewSubCategory/ViewSubCategory'
import AdminLogout from '../Pages/Admin/Logout'
import AddAdmin from '../Pages/Admin/Settings/CustomAdmin/AddAdmin'
import ViewAdmins from '../Pages/Admin/Settings/CustomAdmin/ViewAdmins'
import ChangePw from '../Pages/User/Secured/Profile/ChangePw'
import Orders from '../Pages/Admin/Orders/Orders'
import MyCart from '../Pages/User/UnSecured/MyCart'

const AllRoute = () => {
  return (
    <Routes>
      <Route path='' element={<UserModule />} >
        <Route path='' element={<Home />} />
        <Route path='ourproduct' element={<OurProduct />} />
        <Route path='products/cate/:cateId' element={<OurProduct />} />{/*Self made*/}
        <Route path='products/subCate/:subCateId' element={<OurProduct />} />{/*Self made*/}
        <Route path='about' element={<About />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='product/:proId' element={<ProductDetail />} />
        <Route path='mycart' element={<MyCart />} />
        <Route path='' element={<UserProtectedModule />}>
          <Route path='buynow' element={<BuyNow />} />
          <Route path='buynow/:proId' element={<BuyNow />} />
          <Route path='order-placed' element={<OrderSuccess />} />
          <Route path='order-placed/:proId' element={<OrderSuccess />} />
          <Route path='your-orders' element={<YourOrders />} />
          <Route path='profile'>
            <Route path='' element={<MyProfile />} />
            <Route path='edit' element={<EditProfile />} />
            <Route path='changepw' element={<ChangePw />} />
          </Route>
          <Route path='logout' element={<Logout />} />
        </Route>
      </Route>

      <Route path='admin'>
        <Route path='' element={<AdminLogin />} />
        <Route path='' element={<AdminModule />} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='users' element={<Users />} />
          <Route path='orders' element={<Orders />} />
          <Route path='setting' element={<Setting />}>
            <Route path='customadmin' >
              <Route path='add' element={<AddAdmin />} />
              <Route path='view' element={<ViewAdmins />} />
              <Route path='edit/:adminId' element={<AddAdmin />} />
            </Route>
          </Route>
          <Route path='category' >
          <Route path='add' element={<AddCategory />} />
          <Route path='view' element={<ViewCategory />} />
          <Route path='edit/:cateId' element={<AddCategory />} />
          </Route>
          <Route path='subcategory' >
          <Route path='add' element={<AddSubCategory />} />
          <Route path='view' element={<ViewSubCategory />} />
          <Route path='edit/:subCateId' element={<AddSubCategory />} />
          </Route>
          <Route path='product' >
          <Route path='add' element={<AddProduct />} />
          <Route path='view' element={<ViewProduct />} />
          <Route path='edit/:productId' element={<AddProduct />} />
          </Route>
          <Route path='logout' element={<AdminLogout />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AllRoute