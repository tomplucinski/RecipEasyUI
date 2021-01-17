import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing'
import PrivateRoute from './components/routing/PrivateRoute';
import SignUp from './components/auth/SignUp/SignUp';

// // Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/dashboard" />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
