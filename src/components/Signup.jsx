import React, { useEffect } from 'react';

export default function Signup(props) {
  const {handleFieldChange, userFields, clearInput, submitSignup} = props;

  useEffect(() => {
    return (() => clearInput());
  }, [])

  return ( 
    <div>
    <h1>Please Signup Below</h1>
      <form action="" onSubmit={(e) => submitSignup(e)}>
        
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
