import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const AddCartModal = ({ item }) => {
  const navigate = useNavigate()
  const btnClickHandler = (path)=>{
    navigate(path)
  }
  return (
    <div className="modal" id='addCartModal'>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header text-dark">
            <h5 className="modal-title">Message</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-dark">
            <p><span className='text-dark fw-bold'>{item.name || (item.product_id && item.product_id.name)}</span> added to your cart.</p>
          </div>
          <div className="modal-footer">
            <button onClick={()=>btnClickHandler('/ourproduct')} className="btn btn-secondary" data-bs-dismiss="modal">Continue Shopping</button>
            <button onClick={()=>btnClickHandler('/mycart')} className="btn btn-danger" data-bs-dismiss="modal">Go To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCartModal