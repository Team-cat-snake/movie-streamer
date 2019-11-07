import React from 'react';

const Login =({ submitLogin }) => ( 
  <div className="login-signup-container">
    <h1>Welcome back, please Login</h1>
    <form className="login-signup-form" onSubmit={submitLogin}>
      <input 
          placeholder='Enter username'
          type="text"
          name='username'
        />      
      <input 
        placeholder="Enter password"
        type="password"
        name="password"
      />
      <button className="submit-btn" type='submit'>Sign in</button>
    </form>
  </div>
)

export default Login;
