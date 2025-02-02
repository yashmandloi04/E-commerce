import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../Helpers/Path'
import axios from 'axios'
import AskDeleteModal from '../../../Components/Admin/ChildProps/AskDeleteModal'
import OrderItem from './OrderItem';

const Orders = () => {
  const componentName = 'Order'
  let [orderList, setOrderList] = useState([])
  let [selectedOrder, setSelectedOrder] = useState({})
  let [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${API_URL}/order`)
      .then(Response => {
        setIsLoading(false)
        setOrderList(Response.data)
      })
  }, [])
  const askDeleteHandler = (order)=>{
    setSelectedOrder(order)
  }
  const confirmDeleteHandler = async () => {
    let response = await axios.put(`${API_URL}/order/cancel/${selectedOrder._id}`)
    if (response.request.status === 200) {
      setOrderList(() => orderList.map(orderItem => {
        if (orderItem._id == selectedOrder._id) {
          return { ...orderItem, cancel_status: 2 }
        } else {
          return orderItem
        }
      }))
    }
  }
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h4>List of all users.</h4>
          {
            isLoading
              ?
              <div className="text-center">
                <div className="spinner-border" style={{ width: '5rem', height: '5rem' }} role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              :
              <table className="table table-dark my-3 table-striped table-hover">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Orderd Item</th>
                    <th>Status</th>
                    <th>Cancel</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    orderList.map((orderItem, index) => (
                      <OrderItem key={orderItem._id} index={index} orderItem={orderItem} askDeleteHandler={askDeleteHandler} />
                    ))
                  }
                </tbody>
              </table>
          }
        </div>
      </div>
      <AskDeleteModal cpName={componentName} item={selectedOrder} confirmDeleteHandler={confirmDeleteHandler} />
    </>
  )
}
export default Orders