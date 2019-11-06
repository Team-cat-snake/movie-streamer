import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import App from './App.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

export default function Nav(props) {
  const {handleFieldChange, userFields, clearInput, submitLogin, submitSignup} = props;
  return (
    <div className="navbar">

      <h1>Movie On</h1>
       <Link to="/">Home</Link>
     <nav className="nav-links">
        <ul>
          <li>
             <Link to="/login">Login</Link>
          </li>
          <li>
             <Link to="/signup">Signup</Link>
          </li>
        </ul>
     </nav>
      



      <Switch>
        <Route path="/login">
          <Login 
            userFields={userFields}
            handleFieldChange={handleFieldChange} 
            clearInput={clearInput}
            submitLogin={submitLogin}
          />
        </Route>
        <Route path="/signup">
          <Signup 
            userFields={userFields}
            handleFieldChange={handleFieldChange} 
            clearInput={clearInput}
            submitSignup={submitSignup}
          />
        </Route>
      </Switch>
    </div>
   )
}