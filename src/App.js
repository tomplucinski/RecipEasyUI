import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Landing from './components/layout/Landing/Landing'
import Dashboard from "./components/layout/Dashboard/Dashboard";
import PrivateRoute from './components/routing/PrivateRoute';
import Register from './components/auth/Register/Register';
import Login from './components/auth/Login/Login'
import './App.css';

const App = () => {

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;