import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar'
import './Dashboard.css'
import { Link } from 'react-router-dom';

const Dashboard = ({ auth: { user } }) => {

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-header">
        <h2 className="text-primary">Welcome back, {user && user.firstName}!</h2>
        <Link className="btn btn-primary" to="/add_recipe">Add New Recipe</Link>
      </div>
      <div className="vegan-recipes">
        <div className="dark-overlay-dashboard">
          <h2 className="text-recipes">Vegan Recipes</h2>
        </div>
      </div>
      <div className="asian-recipes">
        <div className="dark-overlay-dashboard">
          <h2 className="text-recipes">Asian Recipes</h2>
        </div>
      </div>
      <div className="american-recipes">
        <div className="dark-overlay-dashboard">
          <h2 className="text-recipes">American Recipes</h2>
        </div>
      </div>
      <div className="italian-recipes">
        <div className="dark-overlay-dashboard">
          <h2 className="text-recipes">Italian Recipes</h2>
        </div>
      </div>
      <div className="mediterranean-recipes">
        <div className="dark-overlay-dashboard">
          <h2 className="text-recipes">Mediterranean Recipes</h2>
        </div>
      </div>
      <div className="mexican-recipes">
        <div className="dark-overlay-dashboard">
          <h2 className="text-recipes">Mexican Recipes</h2>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
