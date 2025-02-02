import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../../Helpers/Path'
import ViewCategoryItem from './ViewCategoryItem';
import AskDeleteModal from '../../../../Components/Admin/ChildProps/AskDeleteModal';
import SryNotFound from '../../../../Components/Admin/ChildProps/SryNotFound';


const ViewCategory = () => {
  let [categoryList, setCategoryList] = useState([])
  let [selectedCategory, setSelectedCategory] = useState({})
  let [isLoading, setIsLoading] = useState(false)
  const componentName = 'Category'
  useEffect(() => {
    console.log('view category mounted')
    setIsLoading(true)
    axios.get(`${API_URL}/category`)
      .then(Response => {
        setIsLoading(false)
        setCategoryList(Response.data)
      })
  }, [])
  let getSortedCategory = () => {
    setIsLoading(true)
    axios.get(`${API_URL}/category/sort`)
      .then((Response) => {
        setIsLoading(false)
        setCategoryList(Response.data)
      })
  }
  const updateHandler = (item)=>{
    console.log('Update handler called.')
    console.log(item)
    // <Navigate to={`/admin/category/edit/${item._id}`} />
  }
  const askDeleteHandler = (item) => {
    setSelectedCategory(item)
  }
  const confirmDeleteHandler = async () => {
    let response = await axios.delete(`${API_URL}/category/${selectedCategory._id}`)
    // let newList = categoryList.filter(item => selectedCategory._id != item._id)
    setCategoryList(categoryList.filter(item => selectedCategory._id != item._id))
  }
  return (
    <>
      <AskDeleteModal cpName={componentName} item={selectedCategory} confirmDeleteHandler={confirmDeleteHandler} />
      {
        !categoryList.length ?
          <SryNotFound cpName={componentName} />
          :
          <div className="row">
            <div className="col-md-12">
              <div>
                <h4>List of all Category.</h4>
                <button onClick={getSortedCategory}>Sort</button>
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
                        <th>Category</th>
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
                      <ViewCategoryItem
                        categoryList={categoryList}
                        updateHandler={updateHandler}
                        askDeleteHandler={askDeleteHandler}
                      />
                    </tbody>
                  </table>
              }
            </div>
          </div>
      }
    </>
  )
}

export default ViewCategory