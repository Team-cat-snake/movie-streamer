import React from 'react';


const Signup = ({ submitSignup }) => (
  <div className="login">
    <h1>New User? Fill out this form.</h1>
    <form className="signup-form" onSubmit={submitSignup} className="login-form">
      <input 
        className="input-field"
        placeholder='Enter username'
        type="text"
        name="username"
      />       
      <input 
        className="input-field"
        placeholder="Enter password"
        type="password"
        name="password"
      />
      <div className="submit-btn">
      <button className="submit-btn" type='submit'>Sign Up</button>
      </div>
    </form>
  </div>
)

export default Signup;
