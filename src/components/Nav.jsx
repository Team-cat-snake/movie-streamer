import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import App from './App.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

export default function Nav() {
   return (
    <div className="navbar">

      <h1>Movie On</h1>
       <Link exact to="/">Home</Link>
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
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
   )
}