import React from 'react';
import { Link } from 'react-router-dom';


const Landing = () => {
  
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">RecipEasy</h1>
          <p className="lead">
            Browse recipes or create a profile and add your own touch!
          </p>
          <div className="buttons">
            <Link to="/signup" className="btn btn-primary">
              Create Profile
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;