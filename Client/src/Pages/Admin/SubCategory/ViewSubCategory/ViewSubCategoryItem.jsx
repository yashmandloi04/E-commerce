import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { RxUpdate } from "react-icons/rx";

const ViewSubCategoryItem = ({ subCategoryList, askDeleteHandler }) => {
  return (
    subCategoryList.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.categoryId.name}</td>
        <td>{item.name}</td>
        {
          localStorage.getItem('type-admin') == 1
          &&
          <>
            <td><NavLink to={`/admin/subcategory/edit/${item._id}`}
            className="btn btn-sm btn-info"
          ><RxUpdate /></NavLink></td>
          <td><button onClick={() => askDeleteHandler(item)}
          data-bs-toggle="modal"
          data-bs-target="#delmodal"
          className="btn btn-sm btn-danger"
        ><FaRegTrashAlt /></button></td>
          </>
        }
      </tr>
    ))
  )
}

export default ViewSubCategoryItem