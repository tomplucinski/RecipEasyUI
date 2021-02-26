import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar'

const Dashboard = ({ auth: { user } }) => {
  const state = useState({
    clicked: false
  })

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="text-primary">Welcome {user && user.firstName || "Tom"}</h2>

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
