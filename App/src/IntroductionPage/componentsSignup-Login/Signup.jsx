import './Signup.css'
import React,{useState,} from 'react';
import user_icon from './person.png'
import email_icon from './email.png'
import password_icon from './password.png'
import axios from 'axios'
import { Link } from 'react-router-dom';
import wp from './wpp.svg'
import SuccessPage from './SignupSuccess';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [users,setusers]=useState([])
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const[action,setAction] = useState("Sign Up");
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);
  // Inside your component
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make POST request to create user
      await axios.post('http://localhost:3001/Create', { name, email, password });
      console.log('User added successfully');
      setname('');
      setemail('');
      setpassword('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error.response?.data || 'An error occurred';
      console.log('Error message:', errorMessage);
      if (errorMessage === 'Email already in use. Please use another email.') {
        // Update the error message state
        setname('');
        setemail('');
        setpassword('');
        setErrorMessage('');
        setErrorMessage('Email is already in use. Please use another email.');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };
  if (isSignupSuccess) {
    setTimeout(() => {
      navigate('/signup-success'); // Use navigate function to redirect
    }, 3000); // Redirect to success page after 3 seconds
  }
  
  
  
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
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
      </div>
      <img src={wp} alt="wp" className="imageclass" />
    </div>
  );
        }
  export default Signup;

