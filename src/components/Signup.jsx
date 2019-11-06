import React, { useEffect } from 'react';

export default function Signup(props) {
  const {handleFieldChange, userFields, clearInput, submitSignup} = props;

  useEffect(() => {
    return (() => clearInput());
  }, [])

  return ( 
    <div class="login">
    <h1>Please Signup Below</h1>
      <form action="" onSubmit={(e) => submitSignup(e)} className="login-form">
        
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
