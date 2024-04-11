import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="submit" value="Sign Up" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <label>
          <input type="checkbox" /> I agree to the terms and conditions
        </label>
        <input type="submit" value="Sign Up" />
      </form>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default Form;