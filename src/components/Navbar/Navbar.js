import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'
import './Navbar.css'

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <Fragment>
      <h1>
        <Link to="/dashboard">
          <i className="fas fa-code"></i> RecipEasy
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
        <a onClick={logout} href="#!">
            Logout
          </a>
        </li>
      </ul>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> RecipEasy
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/register">Create Profile</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </Fragment>
  );

  return (
    <nav className="navbar bg-dark">
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
