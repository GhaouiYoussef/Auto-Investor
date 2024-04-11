import './Signup.css';
import React, { useState } from 'react';
import email_icon from './email.png';
import password_icon from './password.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import wp from './wpp.svg'

function Login() {
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
                </div>
            </div>
            <img src={wp} alt="wp" className="imageclass" />

        </div>
    );
}

export default Login;
