import React, { useState } from 'react'
import { API_INVOICE_DISPLAY, API_INVOICE_DOWNLOAD, API_PATH, API_URL } from '../../Helpers/Path'
import { BiSolidDownload } from "react-icons/bi"
import axios from 'axios';
import styles from './OrderItem.module.css'

const OrderItem = ({ orderItem, askDeleteHandler }) => {
  let [invFile, setInvFile] = useState({})
  let [isLoading, setIsLoading] = useState(false)
  let [showInvBox, setShowInvBox] = useState(false)
  const orderAtDate = new Date(orderItem.order_date).getDate() + ' ' + (new Date(orderItem.order_date).getMonth() + 1) + ' ' + new Date(orderItem.order_date).getFullYear()
  const generateInvoice = async (orderId) => {
    setIsLoading(true)
    let response = await axios.get(`${API_URL}/invoice/${orderId}`)
    {
      // let aLink = document.createElement('a')
      // let url = `${API_INVOICE_DOWNLOAD}/${response.data.filename}`
      // aLink.href = url
      // aLink.setAttribute('download', url)
      // aLink.target = '_blank';
      // document.body.appendChild(aLink)
      // aLink.click()
      console.log(response)
      setInvFile(response.data)
      setIsLoading(false)
      setShowInvBox(true)
      // document.body.removeChild(aLink)
      // window.url.revokeObjectURL(url)
    }
  }
  return (
    <div className="row m-3 p-3 bg-secondary rounded">
      <div className="card-header">
        <div className="row py-2">
          <div className="col-md-2 offset-md-1">
            <h5>Order Placed</h5>
            <h6>{orderAtDate}</h6>
          </div>
          <div className="col-md-2">
            <h5>Total</h5>
            <h6>&#8377;{orderItem.product_id && (orderItem.product_id.price - (orderItem.product_id.price * orderItem.product_id.discount) / 100).toFixed(2)}</h6>
          </div>
          <div className="col-md-2">
            <h5>Ship To</h5>
            <h6>{orderItem.address}</h6>
          </div>
          <div className="col-md-2">
            <h5>Contact No.</h5>
            <h6>{orderItem.contact}</h6>
          </div>
          <div className="col-md-2">
            {
              isLoading
                ?
                <>
                  <div className='spinner-border'></div>
                  <h6>Prepairing Invoice...</h6>
                </>
                :
                orderItem.cancel_status != 2
                &&
                <>
                  <button onClick={() => {
                    showInvBox
                      ?
                      setShowInvBox(false)
                      :
                      generateInvoice(orderItem._id)
                  }}  className='mx-1 btn btn-secondary btn-sm'><BiSolidDownload size={25} /></button>

                  <h6>Invoice</h6>
                </>
            }
            {
              showInvBox
              &&
              <div style={{ height: '120px', width: '150px'}} className='p-2 rounded text-danger bg-light'>
                <p><a className={styles.anchor} onClick={() => setShowInvBox(false)} href={`${API_INVOICE_DISPLAY}/${invFile.fileName}`} target='_blank'>View Invoice</a></p>
                <p><a className={styles.anchor} onClick={() => setShowInvBox(false)} href={`${API_INVOICE_DOWNLOAD}/${invFile.zipName}`} download>Download Invoice</a></p>
              </div>
            }
          </div>
          <div className="col-md-1">
            {
              orderItem.cancel_status != 2
              &&
              <button data-bs-toggle='modal' data-bs-target='#delmodal' onClick={()=>askDeleteHandler(orderItem)} className='btn btn-danger'>Cancel</button>
            }
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-1 offset-md-1 text-center">
            <img src={`${API_PATH}/${orderItem.product_id && orderItem.product_id.image}`} alt={orderItem.product_id && orderItem.product_id.name} className='img-thumbnail' style={{ height: '100px' }} />
          </div>
          <div className="col-md-7">
            <p>{orderItem.product_id && orderItem.product_id.name}</p>
          </div>
          <div className={`col-md-3 fs-3 fw-bold ${orderItem.cancel_status == 0 ? 'text-success' : orderItem.cancel_status == 1 ? 'text-warning' : orderItem.cancel_status == 2 ? 'text-primary' : ''}`}>
            {orderItem.cancel_status == 0 ? 'Arriving...' : orderItem.cancel_status == 1 ? 'Deliverd...' : orderItem.cancel_status == 2 ? 'Canceled...' : ''}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderItem