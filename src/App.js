import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/layout/Navbar/Navbar';
import Landing from './components/layout/Landing/Landing'
import Dashboard from "./components/layout/Dashboard/Dashboard";
import PrivateRoute from './components/routing/PrivateRoute';
import Register from './components/auth/Register/Register';
// // Redux
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';

const App = ({auth: {user}}) => {

  if (user) {
    store.dispatch(loadUser(user.id));
  }

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/signup" component={Register} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Fragment>
    </Router>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);