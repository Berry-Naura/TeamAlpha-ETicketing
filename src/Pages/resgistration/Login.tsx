import React, { useState } from 'react'
import "./registration.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from'react-router-dom';
function Login() {
    
    
    function handleSubmit(){
        console.log("submit clicked");
    }
        
  return (
    <div className='body'>
    <div className='login-container'>
      <h1>Login</h1>
      <form >
        <label htmlFor="l1">Email</label><br />
      <input type="text" placeholder='Email' /><br />
      <label htmlFor="l2">Password</label><br />
      <input type="password" placeholder= "Type your password" />
      <br />
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <p className='signup'>Don't have an account? <Link to="#">Sign Up</Link> </p>
      </form>
    </div>
    </div>
  )
}

export default Login
