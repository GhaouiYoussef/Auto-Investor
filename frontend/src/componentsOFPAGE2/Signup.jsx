import './Signup.css'
import React,{useState} from 'react';
import user_icon from './person.png'
import email_icon from './email.png'
import password_icon from './password.png'
import axios from 'axios'

function Signup() {
  const [users,setusers]=useState([])
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const[action,setAction] = useState("Sign Up");


  const handleSubmit = (event) => {
    console.log('submit')
    event.preventDefault();
    axios
    .post('http://localhost:3001/Create',{name,email,password})
    .then(()=>{
      console.log('user added')
      setname('')
      setemail('')
      setpassword('')
    })
    .catch((error)=>{
      console.log('not added')
    })
  }
  
  
  return (
    <div className='container'>
    <div className='header'>
      <div className="text">{action}</div>
      <div className="underline"></div>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="inputs">
      {action=="Login"?<div></div>:<div className="input">
        <img src={user_icon} alt="" />
        <input type="text" placeholder="Name"    
        value={name}
        onChange={(e)=>setname(e.target.value)}
        />
        <input type="text" />
      </div>}
      
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
        <input type="Password" />
      </div>
    </div>
    
    {action=="Sign Up"?<div></div>:<div className="forgot-password" >Lost Password ?<span> Click Here!</span></div>}
    
    <div className="main">
  <button
    className={action === "Login" ? "submit gray" : "submit"}
    onClick={() => { setAction("Sign Up") }} >Sign Up</button>
  <button
    className={action === "Sign Up" ? "submit gray" : "submit"}
    onClick={() => { setAction("Login") }} > Login </button>
</div>
</form>
</div>
  );
}

export default Signup;