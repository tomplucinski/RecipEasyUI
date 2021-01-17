import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
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
        </div>
      </Router>
    </Provider>
  );
};

export default App;
