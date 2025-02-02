import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../../../Helpers/Path'
import ViewSubCategoryItem from './ViewSubCategoryItem'
import AskDeleteModal from '../../../../Components/Admin/ChildProps/AskDeleteModal'
import SryNotFound from '../../../../Components/Admin/ChildProps/SryNotFound'

const ViewSubCategory = () => {
  let [subCategoryList, setSubCategoryList] = useState([])
  let [selectedSubCategory, setSelectedSubCategory] = useState({})
  let [isLoading, setIsLoading] = useState(false)
  const componentName = 'Sub-Category'
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${API_URL}/subcategory`)
      .then(Response => {
        setIsLoading(false)
        setSubCategoryList(Response.data)
      })
  }, [])

  let getSortedCategory = async () => {
    setIsLoading(true)
    let response = await axios.get(`${API_URL}/subcategory/sort`)
    setIsLoading(false)
    setSubCategoryList(response.data)
  }

  const askDeleteHandler = (item) => {
    setSelectedSubCategory(item)
  }

  const confirmDeleteHandler = async () => {
    let response = await axios.delete(`${API_URL}/subcategory/${selectedSubCategory._id}`)
    setSubCategoryList(subCategoryList.filter(item => selectedSubCategory._id != item._id))
  }

  return (
    <>
      <AskDeleteModal cpName={componentName} item={selectedSubCategory} confirmDeleteHandler={confirmDeleteHandler} />
      {
        !subCategoryList.length
          ?
          <SryNotFound cpName={componentName} />
          :
          <div className="row">
            <div className="col-md-12">
              <div>
                <h4>List of all Sub-category.</h4>
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
                      <ViewSubCategoryItem
                        subCategoryList={subCategoryList}
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

export default ViewSubCategory