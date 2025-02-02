import React from 'react'

const SryNotFound = ({ cpName }) => {
  return (
    <div className="d-flex align-items-top justify-content-center py-5 vh-100">
  <div className="text-center">
    <div>
      <img 
        src="/public/Assets/images/sad-dog-2.jpg" 
        alt="Sad face" 
        className="mb-3"
        style={{height: '250px', width: '250px'}}
      />
    </div>
    <div className="fs-3 fw-bold">
      Sorry, we could not find any {cpName}.
    </div>
  </div>
</div>
  )
}

export default SryNotFound