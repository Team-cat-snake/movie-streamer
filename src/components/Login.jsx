import React from 'react';

const Login =({ submitLogin }) => ( 
  <div className="login">
    <h1>Welcome back, please Login</h1>

    <form className="login-form" onSubmit={submitLogin}>
      <input 
          className="input-field"
          placeholder='Enter username'
          type="text"
          name='username'
        />      
        <input 
          placeholder="Enter password"
          className="input-field"
          type="password"
          name="password"
        />
        <button className="submit-btn" type='submit'>Sign in</button>
    </form>
  </div>
)

export default Login;
