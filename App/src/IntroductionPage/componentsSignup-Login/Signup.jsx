import './Signup.css'
import React,{useState} from 'react';
import user_icon from './person.png'
import email_icon from './email.png'
import password_icon from './password.png'
import axios from 'axios'
import { Link } from 'react-router-dom';
import wp from './wpp.svg'

function Signup() {
  const [users,setusers]=useState([])
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const[action,setAction] = useState("Sign Up");
  // Inside your component
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3001/Create', { name, email, password })
      .then(() => {
        console.log('User added successfully');
        setname('');
        setemail('');
        setpassword('');
      })
      .catch((error) => {
        console.error('Error:', error);
        const errorMessage = error.response?.data?.error || 'An error occurred';
        console.log('Error message:', errorMessage);
        // Handle the error message state here
      });
  };
  
  return (
<div className='container1' >
  {/* <Section />
  <Form /> */}

      <div className='contentSig'>
        <div className='Westani' >

      <form onSubmit={handleSubmit} className='formcontainer'>
        <div className="inputs">
        <h3 className='text'><u>{action}</u></h3>

          {action === "Login" ? null : (
            <div className="input">
              <img src={user_icon} alt="User Icon" />
              <input 
                type="text" 
                placeholder="Name"    
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
          )}
          
          <div className="input">
            <img src={email_icon} alt="Email Icon" />
            <input 
              type="Email" 
              placeholder='Email ID' 
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="Password Icon" />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
        </div>
        
        <div >
        <div className="forgot-password">
                            Already have an account? <Link to="/Page-Login" ><span>Log in</span></Link>
                        </div>
          <div className="submit-container">
            <button
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => { setAction("Sign Up") }}
            >
              Sign Up
            </button>

          </div>
          
        </div>
        
      </form>
      </div>
      </div>
      <img src={wp} alt="wp" className="imageclass" />
    </div>
  );
        }
  export default Signup;

