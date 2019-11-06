import React, { useEffect } from 'react';

export default function Login(props) {
  const {handleFieldChange, userFields, clearInput, submitLogin} = props;

  useEffect(() => {
    return (() => clearInput());
  }, [])

  return ( 
    <div className="login">
    <h1>Please Login Below</h1>
      <form action="" onSubmit={(e) => submitLogin(e)} className="login-form">
        
        <input 
          className="input-field"
          placeholder='Username'
          type="text"
          value={userFields.username}
          onChange={(e) => {handleFieldChange(e)}}
          name="username"
          />
          
          <input 
          className="input-field"
          placeholder="Password"
          type="password"
          value={userFields.password}
          onChange={(e) => {handleFieldChange(e)}}
          name="password"
          />
        <button className="submit-btn" type='submit'>Submit</button>
      </form>
    </div>
  )
}
