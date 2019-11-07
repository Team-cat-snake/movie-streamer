import React from 'react';

const Signup = ({ submitSignup }) => (
  <div className="login-signup-container">
    <h1>New User? Fill out this form</h1>
    <form className="login-signup-form" onSubmit={submitSignup}>
      <input
        placeholder='Enter username'
        type="text"
        name="username"
      />       
      <input 
        placeholder="Enter password"
        type="password"
        name="password"
      />
      <button type='submit'>Sign Up</button>
    </form>
  </div>
)

export default Signup;
