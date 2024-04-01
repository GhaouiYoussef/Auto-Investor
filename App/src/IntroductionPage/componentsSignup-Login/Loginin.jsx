import './Signup.css'
import React,{useState} from 'react';
import email_icon from './email.png'
import password_icon from './password.png'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';

function Login() {
  const navigate=useNavigate()
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    console.log('submit')
    event.preventDefault();
    axios
    .post('http://localhost:3001/Login',{email,password})
    .then(()=>{
      console.log('user logged in')
      setemail('')
      setpassword('')
      setError('');
      navigate('/Dashboard/PageAcceuilDash')

    })
    .catch((error)=>{
      console.log('login failed')
      setError(error.response.data.error);
    })
  }
  
  return (
    <div className='container'>
    <div className='headerS'>
      <div className="text">Login</div>
      <div className="underline"></div>
    </div>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <form onSubmit={handleSubmit}>
    <div className="inputs">
      <div className="input">
        <img src= {email_icon} alt="" />
        <input type="Email" placeholder='Email ID' 
        value={email}
        onChange={(e)=> setemail(e.target.value)}
        />
      </div>
      <div className="input">
        <img src={password_icon} alt="" />
        <input type="password" placeholder="Password" 
        value={password}
        onChange={(e)=> setpassword(e.target.value)}
        />
      </div>
    </div>
    
    <div className="forgot-password" >Lost Password ?<span> Click Here!</span></div>
    
    <div className="main">
    <div className="submit-container">
      <button
        className="submit"
        type="submit"
      > 
        Login 
      </button>
      <Link to="/Page-Signup" className='hh'>
       Don't have an account? Sign Up
      </Link>

    </div>
    </div>
    </form>
    </div>
  );
}

export default Login;