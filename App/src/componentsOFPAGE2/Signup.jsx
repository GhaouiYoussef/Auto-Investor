// SignUp.js
import React, { useState } from 'react';
import './Signup.css'
import user_icon from './person.png'
import email_icon from './email.png'
import password_icon from './password.png'


function SignUp() {
  const[action,setAction] = useState("Sign Up");



  return (
    <div className='container'>
      <div className='header'>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action=="Login"?<div></div>:<div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
          <input type="text" />
        </div>}
        
        <div className="input">
          <img src= {email_icon} alt="" />
          <input type="Email" placeholder='Email ID' />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
          <input type="Password" />
        </div>
      </div>
      {action=="Sign Up"?<div></div>:<div className="forgot-password" >Lost Password ?<span> Click Here!</span></div>}
      
      <div className="submit-container">
        <div className={action=="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action=="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  );
}

export default SignUp;
