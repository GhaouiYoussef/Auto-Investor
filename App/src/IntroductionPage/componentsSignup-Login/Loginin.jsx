import './Signup.css';
import React, { useEffect, useState } from 'react';
import email_icon from './email.png';
import password_icon from './password.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import wp from './wpp.svg';
import googleOneTap from "google-one-tap"
import { useLocation } from 'react-router-dom'; // Assuming you're using React Router


const options = {
      client_id:"596157546363-nkhul4k9ieephhifor3ag73it56lj3ar.apps.googleusercontent.com",
      auto_select: false,
      cancel_on_tap_outside: false,
      context: "signin",

}


function Login() {

    const [loginData, setLoginData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();
  
    // useEffect(() => {
    //   const storedLoginData = localStorage.getItem("loginData");
    //   if (storedLoginData) {
    //     setLoginData(JSON.parse(storedLoginData));
    //     setIsAuthenticated(true);
    //   } else {
    //     if (location.pathname.endsWith("")) {
    //       googleOneTap(options, async (response) => {
    //         console.log(response);
    //         const res = await fetch("http://localhost:3001/api/google-login", {
    //           method: "POST",
    //           body: JSON.stringify({
    //             token: response.credential,
    //           }),
    //           headers: {
    //             "Content-Type": "application/json",
    //           },      
    //         });
            
    //         const data = await res.json();
    //         setLoginData(data);
    //         localStorage.setItem("loginData", JSON.stringify(data));
    //         setIsAuthenticated(true);
    //         console.log(data);
    //         console.log('Hello');
    //       });
    //     } else {
    //       setIsAuthenticated(true); // Skip authentication if URL doesn't end with "Page-Login"
    //     }
    //   }
    // }, [location.pathname]);

    const handlelogout = () => {
      localStorage.removeItem("loginData");
      setLoginData(null);
    } 


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:3001/Login', { email, password })
            .then(() => {
                console.log('User logged in');
                setEmail('');
                setPassword('');
                setError('');
                navigate('/Dashboard/PageAcceuilDash');
            })
            .catch((error) => {
                console.log('Login failed');
                setError(error.response.data.error);
            });
    };

    return (
        <div className="container1">
            <div className="contentSig">
                <div className="Westani">
                    <form onSubmit={handleSubmit} className="formcontainer">
                        <div className="inputs">
                        <h3 className="text"><u>Login</u></h3>

                            <div className="input">
                                <img src={email_icon} alt="Email Icon" />
                                <input
                                    type="email"
                                    placeholder="Email ID"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input">
                                <img src={password_icon} alt="Password Icon" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        <div className="forgot-password">
                            Lost Password? <span>Click Here!</span>
                        </div>

                        <div>
                            <div className="submit-container">
                                <button
                                    className="submit"
                                    type="submit"
                                >
                                    Login
                                </button>
                                <Link to="/Page-Signup" className="hh">
                                    Don't have an account? Sign Up
                                </Link>
                            </div>
                        </div>
                    </form>
                    <div>
                       {loginData ? (
                        <div>
                       <h3>
                        YOU "{loginData.name}" logged in as {loginData.email}
                       </h3>
                       <button onClick={handlelogout}>Logout</button>
                       </div>
                       ):(
                        <div>Not logged in</div>
                       )}

                    </div>
                </div>
            </div>
            <img src={wp} alt="wp" className="imageclass" />

        </div>
    );
}

export default Login;
