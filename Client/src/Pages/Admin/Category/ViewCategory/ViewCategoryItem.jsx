import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

const ViewCategoryItem = ({ categoryList, updateHandler, askDeleteHandler }) => {


  return (
    categoryList.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        {
          localStorage.getItem('type-admin') == 1
          &&
          <>
          {/* onClick={() => updateHandler(item)} */}
            <td><NavLink to={`/admin/category/edit/${item._id}`}
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

export default ViewCategoryItem