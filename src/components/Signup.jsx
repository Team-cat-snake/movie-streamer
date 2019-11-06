import React, { useEffect } from 'react';

export default function Signup(props) {
  const {submitSignup} = props;

  return ( 
    <div>
    <h1>Please Login Gangsta</h1>
      <form action="" onSubmit={(e) => submitSignup(e)}>
        
        <input 
          placeholder='User'
          type="text"
          name="username"
          />
          
          <input 
          placeholder="password"
          type="password"
          name="password"
          />
          <button type='submit'>Submit</button>
      </form>
    </div>
  )
}