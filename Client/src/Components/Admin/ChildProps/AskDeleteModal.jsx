import React from 'react'

const AskDeleteModal = ({ cpName, item, confirmDeleteHandler }) => {
  return (
    <div className="modal" id='delmodal'>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header text-dark">
            <h5 className="modal-title">Delete Confirmation !</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-dark">
            <p>Are you sure want to delete <span className='text-dark fw-bold'>{item.name || (item.product_id && item.product_id.name)}</span> {cpName}.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" onClick={confirmDeleteHandler} className="btn btn-danger" data-bs-dismiss="modal">{item.product_id ? 'Cancel' : 'Delete'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AskDeleteModal