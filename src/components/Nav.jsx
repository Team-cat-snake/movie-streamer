import React from 'react';
import { Link, } from 'react-router-dom';

export default function Nav({verified, logOut, user, getFavorites, getToWatch}) {
  let links;
  if(!verified) {
    links = (
      <ul className="nav-ul">
        <li>
          <Link className="link" to="/login">Login</Link>
        </li>
        <li>
          <Link className="link" to="/signup">Signup</Link>
        </li>
      </ul>
    )
  }
  else {
    links = (
      <ul className = "nav-ul">
        <li>
          <Link className="link" onClick={getFavorites} to="/favs">Favorites</Link>
        </li>
        <li>
          <Link className="link" onClick={getToWatch} to="/toWatch">To Watch</Link>
        </li>
        <li>
          <Link className="link" onClick={logOut} to="/">Log out</Link>
        </li>
      </ul>
    )
  }
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link id="logo" to="/">
          <i className="fas fa-film"></i>
        </Link>
        <h2>
          <Link id="logo" to="/">Movie On</Link>
        </h2>
      </div>
      {links}
    </nav>
   )
}