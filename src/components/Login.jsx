import React from 'react';

const Login =({ submitLogin }) => ( 
  <div className="login">
    <h1>Please Login Below</h1>
    <form className="login-form" onSubmit={submitLogin}>
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
        <button type='submit'>Sign in</button>
    </form>
  </div>
)

export default Login;
