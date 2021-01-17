import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> RecipEasy
        </Link>
      </h1>
      <ul>
      <li>
        <Link to="/profiles">Browse</Link>
      </li>
      <li>
        <Link to="/login">Sign Up</Link>
      </li>
      <li>
        <Link to="/register">Log In</Link>
      </li>
    </ul>
    </nav>
  );
};

export default Navbar