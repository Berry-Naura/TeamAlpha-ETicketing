import React, { useState } from 'react'
import "./registration.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from'react-router-dom';
function SignUp() {
    
    
    function handleSubmit(){
        console.log("submit clicked");
    }
        
  return (
    <div className='body'>
    <div className='login-container'>
      <h1>SignUp</h1>
      <form >
        <label htmlFor="l1" className=''>Name</label><br />
      <input id="l1" type="text" placeholder='type your name' /><br />
      <label  htmlFor="l3">Phone</label><br />
      <input id="l3" type="text" placeholder= "Phone" />
      <br />
      <label htmlFor="l2">Email</label><br />
      <input id="l2" type="text" placeholder= "example@gmail.com" />
      <br />
      <label htmlFor="l4">Password</label><br />
      <input id="l4" type="password" />
      <br />
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <p className='signup'>Already have an account? <Link to="/login">Login</Link> </p>
      </form>
    </div>
    </div>
  )
}

export default SignUp
