import React, { createElement, useEffect, useState } from 'react'
import OrderItem from '../../../Components/User/OrderItem'
import axios from 'axios'
import { API_PATH, API_URL, API_INVOICE_DOWNLOAD } from '../../../Helpers/Path'
import AskDeleteModal from '../../../Components/Admin/ChildProps/AskDeleteModal'

const YourOrders = () => {
  const componentName = 'Order'
  let [orderList, setOrderList] = useState([])
  let [selectedOrder, setSelectedOrder] = useState({})
  useEffect(()=>{
    getOrderList()
  }, [])
  const getOrderList = async ()=>{
    let response = await axios.get(`${API_URL}/order/userid`, {
      headers: {
        Authorization: localStorage.getItem('access-user')
      }
    })
    setOrderList(response.data)
  }
  const askDeleteHandler = (orderItem)=>{
    setSelectedOrder(orderItem)
    console.log('Ask delete handler called', orderItem)
  }
  const confirmDeleteHandler = async ()=>{
    let response = await axios.put(`${API_URL}/order/cancel/${selectedOrder._id}`)
    if(response.request.status === 200){
      setOrderList(()=> orderList.map(orderItem => {
        if(orderItem._id == selectedOrder._id){
          return { ...orderItem, cancel_status: 2}
        }else{
          return orderItem
        }
      }))
    }
  }
  return (
    <>
      <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {
              orderList.map(orderItem => <OrderItem 
                key={orderItem._id} 
                orderItem={orderItem}
                askDeleteHandler={askDeleteHandler}
                />)
            }
          </div>
        </div>
      </div>
    </div>
    <AskDeleteModal cpName={componentName} item={selectedOrder} confirmDeleteHandler={confirmDeleteHandler} />
    </>
  )
}

export default YourOrders