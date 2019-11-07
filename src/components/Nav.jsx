import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Search from './Search.jsx';

export default function Nav(props) {
  const {submitLogin, submitSignup} = props;
  return (
    <div className="navbar">
      <Router>
        <nav className="nav-links">
          <h2 id="title">
              <Link to="/">Movie On</Link>
          </h2>
          <ul className="nav-ul">
            <li className="link">
              <Link to="/login">Login</Link>
            </li>
            <li className="link">
              <Link to="/signup">Signup</Link>
            </li>
            <li className="link">
              <Link to="/search">Search</Link>
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
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
   )
}