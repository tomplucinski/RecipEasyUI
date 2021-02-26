import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'


const Landing = () => {
  
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">RecipEasy</h1>
          <p className="lead">
            Create a profile to browse recipes and share your own with our community!
          </p>
          <div className="button-group">
            <Link to="/register" className="margin btn btn-primary">
              Create Profile
            </Link>
            <Link to="/login" className="margin btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;