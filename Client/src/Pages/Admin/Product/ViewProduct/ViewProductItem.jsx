import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { NavLink } from 'react-router-dom';


const ViewProductItem = ({ product, index, askDeleteHandler }) => {
  return <tr>
    <td>{index + 1}</td>
    <td>{product.name}</td>
    <td>{product.price}</td>
    <td>{product.categoryId && product.categoryId.name}</td>
    <td>{product.subCategoryId && product.subCategoryId.name}</td>
    {
      localStorage.getItem('type-admin') == 1
      &&
      <>
        <td><NavLink to={`/admin/product/edit/${product._id}`}
      className="btn btn-sm btn-info"
    ><RxUpdate /></NavLink></td>
    <td><button onClick={() => askDeleteHandler(product)}
      data-bs-toggle="modal"
      data-bs-target="#delmodal"
      className="btn btn-sm btn-danger"
    ><FaRegTrashAlt /></button></td>
      </>
    }

  </tr>
}

export default ViewProductItem