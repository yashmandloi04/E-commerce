import React from 'react'
import { NavLink } from 'react-router-dom'

const OrderSuccess = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row min-vh-100">
          <div className="col-md-12 h-0">
            <h1 className='text-xl text-success'>Your order placed successfully &#9786;</h1>
          <div>
            <NavLink to={'/your-orders'} style={{color: 'blue'}}>Order List</NavLink>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess