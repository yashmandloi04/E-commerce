import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_PATH, API_URL } from '../../../Helpers/Path'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import OrderValidation from '../../../Schema/User/OrderSchema'

import { placeOrderHandler } from '../../../Redux/MyCartSlice'
import { useDispatch, useSelector } from 'react-redux'

const BuyNow = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()
  let [iniValue, setIniValue] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    product_id: '',
    mode: '',
  })
  let [productDetail, setProductDetail] = useState([])
  let myCartProducts = useSelector(state => state.MyCartSlice)
  useEffect(() => {
    getUserDetails()
    if (params.proId) {
      getProductDetails()
    }
    else {
      setProductDetail(myCartProducts)
    }
  }, [])
  useEffect(() => {
    loadScript('https://checkout.razorpay.com/v1/checkout.js')
  }, [])
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }
  const onPayment = async (FrmData) => {
    try {
      const res = await axios.post(`${API_URL}/payment/createOrder`, { product_id: FrmData.product_id })
      const data = res.data

      const paymentObject = new window.Razorpay({
        key: 'rzp_test_Ff5pe4FP4zdTHb',
        order_id: data.id,
        ...data,
        handler: async (response) => {
          const options = {
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          }
          let res = await axios.post(`${API_URL}/payment/verifyPayment`, options)
          if (res.data.success) {
            if (!params.proId) {
              FrmData.product_id = await myCartProducts.map(product => product)
            }
            dispatch(placeOrderHandler(FrmData))
            navigate(`/order-placed/${params.proId}`)
          } else {
            alert('Payment failed :( ')
          }
        }
      })
      paymentObject.open()
    } catch (error) {
      console.log(error)
    }
  }
  const getUserDetails = async () => {
    let response = await axios.get(`${API_URL}/users/user`, {
      headers: {
        Authorization: localStorage.getItem('access-user')
      }
    })
    let temp = {
      name: response.data[0].name,
      email: response.data[0].email,
      contact: response.data[0].contact,
      address: response.data[0].address,
      product_id: params.proId,
      mode: ''
    }
    setIniValue(temp)
  }
  const getProductDetails = async () => {
    let response = await axios.get(`${API_URL}/product/${params.proId}`)
    setProductDetail(response.data[0])
  }
  let OrderFrm = useFormik({
    validationSchema: OrderValidation,
    initialValues: iniValue,
    onSubmit: async (FrmData) => {
      if (FrmData.mode != 'cod') {
        onPayment(FrmData)
      } else {
        if (!params.proId) {
          FrmData.product_id = await myCartProducts.map(product => product)
        }
        dispatch(placeOrderHandler(FrmData))
        navigate(`/order-placed/${params.proId}`)
      }
    },
    enableReinitialize: true,
  })
  return (
    <div className="container-fluid">
      <div className="container">
        <form onSubmit={OrderFrm.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="card-header p-3 bg-light text-dark rounded">
                <h2>Address and other details.</h2>
              </div>
              <div className="card-body">
                {
                  params.proId
                  &&
                  <div className="my-2">
                    <input type="hidden" onChange={OrderFrm.handleChange} value={OrderFrm.values.product_id} name='proId' id='proId' className='form-control' />
                  </div>
                }
                <div className="my-2">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" onChange={OrderFrm.handleChange} value={OrderFrm.values.name} name='name' id='name' className='form-control' />
                  {OrderFrm.errors.name && OrderFrm.touched.name && <small style={{ color: 'red' }}>{OrderFrm.errors.name}</small>}
                </div>
                <div className="my-2">
                  <label htmlFor="email">Email Id</label>
                  <input disabled type="text" onChange={OrderFrm.handleChange} value={OrderFrm.values.email} name='email' id='email' className='form-control ' />
                  {OrderFrm.errors.email && OrderFrm.touched.email && <small style={{ color: 'red' }}>{OrderFrm.errors.email}</small>}
                </div>
                <div className="my-2">
                  <label htmlFor="contact">Contact No</label>
                  <input type="text" onChange={OrderFrm.handleChange} value={OrderFrm.values.contact} name='contact' id='contact' className='form-control' />
                  {OrderFrm.errors.contact && OrderFrm.touched.contact && <small style={{ color: 'red' }}>{OrderFrm.errors.contact}</small>}
                </div>
                <div className="my-2">
                  <label htmlFor="address">Address</label>
                  <textarea id='address' onChange={OrderFrm.handleChange} value={OrderFrm.values.address} name='address' className='form-control'></textarea>
                  {OrderFrm.errors.address && OrderFrm.touched.address && <small style={{ color: 'red' }}>{OrderFrm.errors.address}</small>}
                </div>
                <div className="my-2">
                  <div>
                    <label className='mx-2' htmlFor="cod">COD</label>
                    <input onChange={OrderFrm.handleChange} value={'cod'} id='cod' type="radio" name='mode' />
                  </div>
                  <div>
                    <label className='mx-2' htmlFor="upi">UPI</label>
                    <input onChange={OrderFrm.handleChange} value={'upi'} type="radio" id='upi' name='mode' />
                  </div>
                  <div>
                    <label className='mx-2' htmlFor="debitcard">Debit Card</label>
                    <input onChange={OrderFrm.handleChange} value={'debitcard'} id='debitcard' type="radio" name='mode' />
                  </div>
                  {OrderFrm.errors.mode && OrderFrm.touched.mode && <small style={{ color: 'red' }}>{OrderFrm.errors.mode}</small>}
                </div>
              </div>
            </div>

            {
              params.proId
                ?
                <div className="col-md-6">
                  <div className="card-header p-3 bg-light text-dark rounded">
                    <h2>Product details.</h2>
                  </div>
                  <div className="card-body">
                    <table className='table table-light'>
                      <tbody>
                        <tr>
                          <td>Image</td>
                          <td className='text-end'><img style={{ width: '100px' }} src={`${API_PATH}/${productDetail.image}`} alt="productDetail Image" /></td>
                        </tr>
                        <tr>
                          <td className='fw-bold'>Title</td>
                          <td className='text-start'>{productDetail.detail}</td>
                        </tr>
                        <tr>
                          <td className='fw-bold'>Price</td>
                          <td className='text-end'>{productDetail.price}</td>
                        </tr>
                        <tr>
                          <td className='fw-bold'>Discount</td>
                          <td className='text-end'>-{(productDetail.discount * productDetail.price) / 100}</td>
                        </tr>
                        <tr>
                          <td className='fw-bold'>Charges</td>
                          <td className='text-end'>+{200}</td>
                        </tr>
                        <tr>
                          <td className='fw-bold text-decoration-underline'>Total</td>
                          <td className='text-end'>+{(productDetail.price - ((productDetail.discount * productDetail.price) / 100) + 200)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {
                    !params.proId
                    &&
                    productDetail.map(product => {
                      <div className="card-body">
                        <table className='table table-light'>
                          <tbody>
                            <tr>
                              <td>Image</td>
                              <td className='text-end'><img style={{ width: '100px' }} src={`${API_PATH}/${product.image}`} alt="Product Image" /></td>
                            </tr>
                            <tr>
                              <td className='fw-bold'>Title</td>
                              <td className='text-start'>{product.detail}</td>
                            </tr>
                            <tr>
                              <td className='fw-bold'>Price</td>
                              <td className='text-end'>{product.price}</td>
                            </tr>
                            <tr>
                              <td className='fw-bold'>Discount</td>
                              <td className='text-end'>-{(product.discount * product.price) / 100}</td>
                            </tr>
                            <tr>
                              <td className='fw-bold'>Charges</td>
                              <td className='text-end'>+{200}</td>
                            </tr>
                            <tr>
                              <td className='fw-bold text-decoration-underline'>Total</td>
                              <td className='text-end'>+{(product.price - ((product.discount * product.price) / 100) + 200)}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    })
                  }
                </div>
                :
                <div className="col-md-6">
                  {
                    myCartProducts
                    &&
                    myCartProducts.map((product, index) => <div key={index} className="row">
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
                    </div>)
                  }
                </div>
            }
            <div>
              <button type='submit' className='px-4 py-2 btn btn-dark text-light'>Place Order</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BuyNow