import React, { useEffect } from 'react';

export default function Login(props) {
  const {handleFieldChange, userFields, clearInput, submitLogin} = props;

  useEffect(() => {
    return (() => clearInput());
  }, [])

  return ( 
    <div>
    <h1>Please Login Gangsta</h1>
      <form action="" onSubmit={(e) => submitLogin(e)}>
        
        <input 
          placeholder='User'
          type="text"
          value={userFields.username}
          onChange={(e) => {handleFieldChange(e)}}
          name="username"
          />
          
          <input 
          placeholder="password"
          type="password"
          value={userFields.password}
          onChange={(e) => {handleFieldChange(e)}}
          name="password"
          />
          <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
