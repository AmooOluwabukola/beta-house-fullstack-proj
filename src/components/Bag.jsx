import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../styles/Layout.css'
const Bag = () => {
    const navigate =useNavigate()
  const logOut = ()=>{
    localStorage.removeItem("clientToken")
    navigate("/SignIn")
  }
  return (
    <>
     
      <section className="bg-white rounded-2 border p-2 shadow-lg nav-bag ">
        {/* Edit */}
        <div className="mb-4">
          <div role="button" className="d-flex gap-2 align-items-center first-div justify-content-start">
           
            <span  className="fw-lighter" >
              Edit Profile
            </span>
           
          </div>
          <hr />
        </div>
      
     
      

        {/* Logout */}
        <div>
          <div className="d-flex gap-2 align-items-center first-div justify-content-start ">
            <Link to="../SignIn">
            
            </Link>
            <span className="fw-lighter" onClick={logOut} role="button">Log Out</span>
          </div>
         
          <hr />
        </div>
      </section>
    </>
  )
}

export default Bag