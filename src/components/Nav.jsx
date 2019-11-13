import React from 'react';
import { Link, } from 'react-router-dom';

export default function Nav({verified, logOut, user, getFavorites, getToWatch, reset}) {
  let links;
  if(!verified) {
    links = (
      <ul className="nav-ul">
        <li>
          <Link className="link" to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
        </li>
        <li>
          <Link className="link" to="/signup"><i className="fas fa-user-plus"></i> Signup</Link>
        </li>
      </ul>
    )
  }
  else {
    links = (
      <ul className="nav-ul">
        <p className='username'>{`Welcome ${user}`}</p>
        <li>
          <Link className="link" onClick={getFavorites} to="/favs"><i className="fas fa-heart"></i> Favorites</Link>
        </li>
        <li>
          <Link className="link" onClick={getToWatch} to="/toWatch"><i className="fas fa-star"></i> To Watch</Link>
        </li>
        <li>
          <Link className="link" onClick={logOut} to="/"><i className="fas fa-sign-out-alt"></i> Log out</Link>
        </li>
      </ul>
    )
  }
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link id="logo" onClick={reset} to="/">
          <i className="fas fa-film"></i>
        </Link>
        <h2>
          <Link id="logo" onClick={reset} to="/">Movie On</Link>
        </h2>
      </div>
      {links}
    </nav>
   )
}