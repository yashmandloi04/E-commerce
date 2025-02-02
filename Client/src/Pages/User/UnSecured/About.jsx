import React, { useState } from 'react'

const About = () => {
  let [user, setUser] = useState({
    name:'',
    email:'',
    password:'',
    ['re-password']:'',
    address:'',
  })

  let show = ()=>{
    console.log(user);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" onChange={(event)=>setUser({...user, name:event.target.value})} className="form-control" id="name" placeholder="John Doe" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" onChange={(event)=>setUser({...user, email:event.target.value})} className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" onChange={(event)=>setUser({...user, password:event.target.value})} className="form-control" id="password" placeholder="password" />
            </div>
            <div className="mb-3">
              <label htmlFor="re-password" className="form-label">Password</label>
              <input type="password" onChange={(event)=>setUser({...user, ['re-password']:event.target.value})} className="form-control" id="re-password" placeholder="re-password" />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea className="form-control" onChange={(event)=>setUser({...user, address:event.target.value})} id="address" rows="3"></textarea>
            </div>
            <div>
              <button type='submit' onClick={show} className='btn btn-danger'>Ok</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About