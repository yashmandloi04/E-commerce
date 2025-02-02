import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { API_PATH } from '../../../Helpers/Path';
import styles from './ProductCard.module.css'

const ProductCard = ({ product }) => {
  let [discountedPrice, setDiscountedPrice] = useState(0)
  useEffect(() => {
    setDiscountedPrice(percentCalculation(product.price, product.discount))
  }, [])
  function percentCalculation(a, b){
    var c = (a-(parseFloat(a)*parseFloat(b))/100).toFixed(2);
    return parseFloat(c);
  }
  return <div className="d-flex border border-secondary rounded overflow-hidden">
  {/* Image Section */}
  <div className="flex-shrink-0 d-flex justify-content-center align-items-center p-2" style={{ width: "300px", backgroundColor: "#f8f9fa" }}>
    <img
      className="img-fluid"
      style={{ height: "200px", objectFit: "contain" }}
      src={`${API_PATH}/${product.image}`}
      alt={product.name}
    />
  </div>

  {/* Details Section */}
  <div className="flex-grow-1 p-3 d-flex flex-column justify-content-between">
    {/* Product Name */}
    <NavLink to={`/product/${product._id}`} className={`text-primary text-decoration-none ${styles.link}`}>
      {product.name}
    </NavLink>

    {/* Product Details */}
    <p className="mt-2 text-muted small">
      {product.detail}
    </p>

    {/* Pricing */}
    <div className="mt-3 d-flex align-items-center">
      <span className="text-decoration-line-through me-2 text-muted">
        ₹{product.price}
      </span>
      <span className="fw-bold text-dark">
        ₹{discountedPrice}
      </span>
    </div>

    {/* Category and Subcategory */}
    <p className="mt-2 small text-muted">
      Category: <span className="fw-semibold">{product.categoryId && product.categoryId.name}</span>
      {product.subCategoryId && (
        <> / <span className="fw-semibold">{product.subCategoryId.name}</span></>
      )}
    </p>

    {/* Net Quantity Available */}
    <p className="mt-2 small text-muted">
      Net Quantity Available: <span className="fw-semibold">{product.quantity}</span>
    </p>
  </div>
</div>
//   return <div className="d-flex border border-secondary rounded overflow-hidden">
//   {/* Image Section */}
//   <div className="flex-shrink-0 p-2" style={{ width: "300px", backgroundColor: "#f8f9fa" }}>
//     <img
//       className="img-fluid"
//       style={{ height: "200px", objectFit: "contain" }}
//       src={`${API_PATH}/${product.image}`}
//       alt={product.name}
//     />
//   </div>

//   {/* Details Section */}
//   <div className="flex-grow-1 p-3 d-flex flex-column justify-content-between">
//     {/* Product Name */}
//     <NavLink to={`/product/${product.id}`} className="text-primary text-decoration-none">
//       {product.name}
//     </NavLink>

//     {/* Product Details */}
//     <p className="mt-2 text-muted small">
//       {product.body}
//     </p>

//     {/* Pricing */}
//     <div className="mt-3 d-flex align-items-center">
//       <span className="text-decoration-line-through me-2 text-muted">
//         ₹{product.price}
//       </span>
//       <span className="fw-bold text-dark">
//         {/* ₹{product.discountedPrice} */}
//       </span>
//     </div>

//     {/* Category and Subcategory */}
//     <p className="mt-2 small text-muted">
//       Category: <span className="fw-semibold">{product.categoryId && product.categoryId.name}</span>
//       {product.subCategoryId && (
//         <> / <span className="fw-semibold">{product.subCategoryId.name}</span></>
//       )}
//     </p>

//     {/* Net Quantity Available */}
//     <p className="mt-2 small text-muted">
//       Net Quantity Available: <span className="fw-semibold">{product.quantity}</span>
//     </p>
//   </div>
// </div>
  //   {/* Image Section */}
  //   <div style={{width: '300px'}} className="w-1/3 p-10flex-shrink-0 bg-gray-100 p-2">
  //     <img
  //     style={{height: '200px'}}
  //       className="w-full m-10 h-32 object-contain"
  //       src={`${API_PATH}/${product.image}`}
  //       alt={product.name}
  //     />
  //   </div>

  //   {/* Details Section */}
  //   <div className="w-2/3 p-4 flex flex-col justify-between">
  //     {/* Product Name */}
  //     <NavLink
  //       to={`/product/${product.id}`}
  //       className="text-lg font-medium text-blue-600 hover:underline truncate"
  //     >
  //       {product.name}
  //     </NavLink>

  //     {/* Product Details */}
  //     <p className="text-sm text-gray-600 mt-2 line-clamp-3">
  //       {product.body}
  //     </p>

  //     {/* Pricing */}
  //     <div className="mt-3 flex items-center space-x-2">
  //       <span className="text-sm text-gray-500 line-through">
  //         ₹{product.price}
  //       </span>
  //       <span className="text-lg font-semibold text-gray-900">
  //         {/* ₹{product.discountedPrice} */}
  //       </span>
  //     </div>

  //     {/* Category and Subcategory */}
  //     <p className="text-sm text-gray-500 mt-2">
  //       Category: <span className="font-medium">{product.categoryId && product.categoryId.name}</span>
  //       {product.subCategoryId && (
  //         <> / <span className="font-medium">{product.subCategoryId.name}</span></>
  //       )}
  //     </p>

  //     {/* Net Quantity Available */}
  //     <p className="text-sm text-gray-500 mt-2">
  //       Net Quantity Available: <span className="font-medium">{product.quantity}</span>
  //     </p>
  //   </div>
  // </div>
  // return <div className="col">
  //   <div className="card position-relative h-100 shadow-sm">
  //     {/* Discount Badge */}
  //     <span className="badge bg-success position-absolute top-0 start-0 m-3">-30%</span>

  //     {/* Product Image */}
  //     <figure className="text-center mb-0">
  //       <a href="index.html" title="Product Title">
  //         <img
  //           src={`${API_PATH}/${product.image}`}
  //           className="img-fluid p-3"
  //           alt="Product"
  //         />
  //       </a>
  //     </figure>

  //     {/* Product Details */}
  //     <div className="card-body text-center">
  //       {/* Product Title */}
  //       <h5 className="card-title mb-2">{ product.name }</h5>

  //       {/* Price */}
  //       <span className="d-block text-success fw-bold fs-5 mb-3">{ product.price }</span>

  //       {/* Quantity Selector and Add to Cart
  //       <div className="d-flex justify-content-between align-items-center">
  //         // {/* Quantity Selector 
  //         <div className="input-group input-group-sm">
  //           <button className="btn btn-danger" type="button">
  //             <span className="wishlist-minus"><FaMinus /></span>
  //           </button>
  //           <input
  //             type="text"
  //             className="form-control text-center"
  //             value="1"
  //             aria-label="Quantity"
  //           />
  //           <button className="btn btn-success" type="button">
  //             <span className="wishlist-plus"><FaPlus /></span>
  //           </button>
  //         </div> */}

  //         {/* Add to Cart Button
  //         <a href="#" className="btn btn-primary d-flex align-items-center">
  //           Cart <TiShoppingCart size="20" className="ms-2" />
  //         </a> */}
  //       {/* </div> */}
  //     </div>
  //   </div>
  // </div>

}

export default ProductCard