import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing'
// // Redux
import { Provider } from 'react-redux';
import store from './store';
import './App.css';


const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
