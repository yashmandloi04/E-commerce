import React, { useEffect, useState } from 'react'
import Products from '../../../Components/User/Product/Products'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { API_URL } from '../../../Helpers/Path';
const OurProduct = () => {
  const params = useParams()
  let [allProduct, setAllProduct] = useState([])
  useEffect(()=>{
    if(params.subCateId){
      getAllProBySubCate(params.subCateId)
    }else if(params.cateId){
      getAllProByCate(params.cateId)
    }else{
      getAllProduct()
    }
  },[params])
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  const getAllProduct = async ()=>{
    let response = await axios.get(`${API_URL}/product`)
    // console.log(response.data)
    setAllProduct(response.data)
  }
  const getAllProByCate = async (cateId)=>{
    // console.log('Category Id called')
    let response = await axios.get(`${API_URL}/product/cate/${cateId}`)
    // console.log(response.data)
    setAllProduct(response.data)
  }
  const getAllProBySubCate = async (subCateId)=>{
    // console.log('Sub category Id called')
    let response = await axios.get(`${API_URL}/product/subCate/${subCateId}`)
    console.log(response.data)
    setAllProduct(response.data)
  }
  return (
    <>
      <Products allProduct={allProduct} />
    </>
  )
}

export default OurProduct