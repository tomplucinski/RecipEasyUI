import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar'
import AddRecipe from '../AddRecipe/AddRecipe'
import './Dashboard.css'

const Dashboard = ({ auth: { user } }) => {

  return (
    <div>
      <Navbar />
      <div className="dashboard-header">
        <h2 className="text-primary">Welcome back, {user && user.firstName}!</h2>
        <AddRecipe />
        <div className="vegan-recipes">Vegan Recipes</div>
        <div className="asian-recipes">Asian Recipes</div>
        <div className="american-recipes">American Recipes</div>
        <div className="italian-recipes">Italian Recipes</div>
        <div className="greek-recipes">Greek Recipes</div>
        <div className="mexican-recipes">Mexican Recipes</div>
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
