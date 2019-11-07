import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

  return (
    <nav className="navbar">
      <h2>
          <Link id="logo" onClick={()=>window.location.reload()} to="/">Movie On</Link>
      </h2>
      <ul className="nav-ul">
        <li>
          <Link className="link" to="/login">Login</Link>
        </li>
        <li>
          <Link className="link" to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
   )
}