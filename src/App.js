import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing'
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from './components/routing/PrivateRoute';
import Register from './components/Register/Register';
import Login from './components/Login/Login'
import './global.css';


const App = () => {

  return (
    <Router>
      <Fragment>
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