import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_PATH, API_URL } from '../../../Helpers/Path'
import { Navigate, NavLink, useNavigate, useParams } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { IoMdCash } from "react-icons/io";
import AddCartModal from '../../../Components/Admin/ChildProps/AddCartModal';

import { addProduct } from '../../../Redux/MyCartSlice';
import { useDispatch } from 'react-redux';

const ProductDetail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  let CustomButton
  let [product, setProduct] = useState({})
  let [discountedPrice, setDiscountedPrice] = useState(0)
  useEffect(() => {
    getProDetail()
  }, [])
  function percentCalculation(a, b) {
    var c = (a - (parseFloat(a) * parseFloat(b)) / 100).toFixed(2);
    return parseFloat(c);
  }
  const getProDetail = async () => {
    let response = await axios.get(`${API_URL}/product/${params.proId}`)
    let discountInRupee = (response.data[0].discount / response.data[0].price) * 100
    // setDiscountedPrice((response.data[0].price-discountInRupee).toFixed(2))
    setDiscountedPrice(percentCalculation(response.data[0].price, response.data[0].discount))
    setProduct(response.data[0])
  }
  if (localStorage.getItem('access-user')) {
    CustomButton = <NavLink to={`/buynow/${params.proId}`} className="btn btn-success"><span className='me-2 mb-2'><IoMdCash size={25} /></span>Buy Now</NavLink>
  } else {
    CustomButton = <NavLink to={'#'} data-bs-toggle='modal' data-bs-target='#confmodal' className="btn btn-success"><span className='me-2 mb-2'><IoMdCash size={25} /></span>Buy Now</NavLink>
  }
  const addToCartHandler = (pro)=>{
    dispatch(addProduct(pro))
  }
  return <>
    <div className="d-flex border border-secondary rounded overflow-hidden p-3">
      {/* Image Section */}
      <div className="flex-shrink-0" style={{ width: "350px", backgroundColor: "#f8f9fa" }}>
        <img
          className="flex-shrink-0 d-flex justify-content-center align-items-center"
          style={{ height: "350px", objectFit: "contain", margin: 'auto' }}
          src={`${API_PATH}/${product.image}`}
          alt={product.name}
        />
      </div>

      <div>
        {/* Product Name */}
        <h2 className="text-primary">{product.name}</h2>
        <div className='d-flex'>
          {/* Details Section */}
          <div className="flex-grow-1 p-4 d-flex flex-column justify-content-between">

            {/* Pricing */}
            <div className="my-3 d-flex align-items-center">
              <span className="text-decoration-line-through me-2 text-muted">
                ₹{product.price}
              </span>
              <span className="fw-bold text-dark">
                ₹{discountedPrice}
              </span>
            </div>

            {/* Category and Subcategory */}
            <p className="small text-muted">
              Category: <span className="fw-semibold">{product.categoryId && product.categoryId.name}</span>
              {product.subCategoryId && (
                <> / <span className="fw-semibold">{product.subCategoryId.name}</span></>
              )}
            </p>

            {/* Net Quantity Available */}
            <p className="small text-muted">
              Net Quantity Available: <span className="fw-semibold">{product.quantity}</span>
            </p>

            {/* Action Buttons */}
            <div className="mt-4">
              <button data-bs-toggle='modal' data-bs-target='#addCartModal' onClick={()=>addToCartHandler(product)} className="btn btn-primary me-3"><span className='me-2 mb-2'><FaShoppingCart size={25} /></span>Add to Cart</button>
              {CustomButton}
            </div>
          </div>

          <div className='w-25 flex-grow-1 p-4 d-flex flex-column justify-content-between'>
            <p className="mt-3">
              {product.detail}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="modal fade" id="confmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Warning!</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            First login to buy an product.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button onClick={() => navigate('/login')} data-bs-dismiss="modal" className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
    <AddCartModal item={product} />
  </>
}

export default ProductDetail