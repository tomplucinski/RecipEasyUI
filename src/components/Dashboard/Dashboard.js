import React, { Fragment, useState } from 'react';
import Recipe from '../Recipe/Recipe'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Nav } from 'react-bootstrap';

const Dashboard = ({ auth: { user } }) => {
  const state = useState({
    clicked: false
  })

  return (
    <Container>
        <h2 className="text-primary">Welcomes {user && user.firstName || "Tom"}</h2>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-0">Add Recipe</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Browse Recipes</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
