import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import App from './App.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

export default function Nav(props) {
  const {submitLogin, submitSignup} = props;
  return (
    <div className="navbar">
      <div className="header">
        <h1>Movie On</h1>
      </div>

     <nav className="nav-links">
        <ul className="nav-ul">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
             <Link to="/login">Login</Link>
          </li>
          <li className="link">
             <Link to="/signup">Signup</Link>
          </li>
        </ul>
     </nav>
      

      <Switch>
        <Route path="/login">
          <Login 
            submitLogin={submitLogin}
          />
        </Route>
        <Route path="/signup">
          <Signup 
            submitSignup={submitSignup}
          />
        </Route>
      </Switch>
    </div>
   )
}