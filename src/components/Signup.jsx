import React from 'react';

const Signup = ({ submitSignup }) => (
  <div>
    <h1>Please Signup Below</h1>
    <form className="signup-form" onSubmit={submitSignup}>
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
