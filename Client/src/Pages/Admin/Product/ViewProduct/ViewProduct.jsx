import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../../Helpers/Path'
import SryNotFound from '../../../../Components/Admin/ChildProps/SryNotFound'
import ViewProductItem from './ViewProductItem'
import AskDeleteModal from '../../../../Components/Admin/ChildProps/AskDeleteModal'

const ViewProduct = () => {
  let [productList, setProductList] = useState([])
  let [isLoading, setIsLoading] = useState(false)
  let [selectedProduct, setSelectedProduct] = useState({})
  const componentName = 'Product'
  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = async () => {
    let response = await axios.get(`${API_URL}/product`)
    console.log(response.data)
    setProductList(response.data)
  }
  const askDeleteHandler = (product)=>{
    setSelectedProduct(product)
  }
  const confirmDeleteHandler = async ()=>{
    await axios.delete(`${API_URL}/product/${selectedProduct._id}`)
    setProductList(productList.filter(product => product._id != selectedProduct._id))
  }
  return (
    <>
    <AskDeleteModal cpName={componentName} item={selectedProduct} confirmDeleteHandler={confirmDeleteHandler} />
      {
        productList.length === 0
          ?
          <SryNotFound cpName={componentName} />
          :
          <div className="row">
            <div className="col-md-12">
              <div>
                <h4>List of all Sub-category.</h4>
                {/* <button onClick={getSortedCategory}>Sort</button> */}
              </div>
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
                        <th>Price</th>
                        <th>Category</th>
                        <th>Sub-Category</th>
                        {
                          localStorage.getItem('type-admin') == 1
                          &&
                          <>
                            <th>Update</th>
                            <th>Delete</th>
                          </>
                        }

                      </tr>
                    </thead>
                    <tbody>
                        {
                          productList.map((product, index) => <ViewProductItem product={product} index={index} askDeleteHandler={askDeleteHandler} />)
                        }
                    </tbody>
                  </table>
              }
            </div>
          </div >
      }
    </>
  )
}

export default ViewProduct