import React, { useEffect, useState } from 'react'
import MyCartSlice from '../../../Redux/MyCartSlice'
import { addProduct, removeProduct } from '../../../Redux/MyCartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { API_PATH } from '../../../Helpers/Path'
import { useNavigate } from 'react-router-dom'

const MyCart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let [cartList, setCartList] = useState([])
  let subTotal = 0
  let discount = 0
  let totalAmount = 0
  let state = useSelector(state => state.MyCartSlice)
  // setSubTotal(0)
  // setDiscount(0)
  // setTotalAmount(0)
  // const getCartTotal = (state) => {
  //   let tSubPrice = 0
  //   let tDiscount = 0
  //   let tTotalAmt = 0
  //   state.map(item => {
  //     tSubPrice += item.price
  //     tDiscount += (item.price * item.discount) / 100
  //   })
  //   setSubTotal(tSubPrice)
  //   setDiscount(tDiscount)
  //   setTotalAmount(tSubPrice - tDiscount + 200)
  // }
  useEffect(() => {
    setCartList(state)
    // getCartTotal(state)
  }, [])
  const tBody = cartList.map((product, index) => {
    subTotal += product.price
    discount += (product.price * product.discount) / 100
    totalAmount = subTotal - discount
    return (
      <div key={index} className="row">
        <div className="col-md-1">
          <p>{index + 1}</p>
        </div>
        <div className="col-md-3 d-flex justify-content-center align-content-center">
          <img className='img-thumbnail' src={`${API_PATH}/${product.image}`} style={{ height: '100px' }} alt="Product Image" />
        </div>
        <div className="col-md-6">
          <p>{product.name}</p>
        </div>
        <div className="col-md-2">
          <p className='mb-0 fs-6 fw-bolder'>₹{(product.price - (product.discount * product.price) / 100)}</p>
          <small className='mt-0 text-decoration-line-through fw-light'>₹{product.price}</small>
        </div>
      </div>
    )
  })
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card-header p-3 bg-light text-dark rounded">
              <h2 className='fw-bold'>Cart.</h2>
            </div>
            <div className="card-body">
              {tBody}
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-header p-3 bg-light text-dark rounded">
              <h2 className='fw-bold'>Order Summary.</h2>
            </div>
            <div className="card-body">
              <table className='table table-light'>
                <tbody>
                  <tr>
                    <td className='fw-semibold'>Subtotal</td>
                    <td className='text-end'>₹ {subTotal}</td>
                  </tr>
                  <tr>
                    <td className='fw-semibold'>Discount</td>
                    <td className='text-end'>₹ -{discount}</td>
                  </tr>
                  <tr>
                    <td className='fw-semibold'>Tax</td>
                    <td className='text-end'>18%</td>
                  </tr>
                  <tr>
                    <td className='fw-semibold'>Charges</td>
                    <td className='text-end'>₹ +{200}</td>
                  </tr>
                  <tr>
                    <td className='fw-bolder text-decoration-underline'>Total</td>
                    <td className='text-end'>₹ {(totalAmount + 200).toFixed(2)}/-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer">
              <button type='submit' onClick={()=>{
                // dispatch(placeOrderHandler())
                navigate('/buynow')
              }} className='px-4 py-2 btn btn-dark text-light'>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCart