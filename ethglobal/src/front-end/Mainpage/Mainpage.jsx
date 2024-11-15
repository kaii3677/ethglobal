import React from 'react';
import { Link } from 'react-router-dom';

import './Mainpage.css';

const Mainpage = () => {
  return (
    <div>
      <nav className="nav">
        <div className='logo'>
            <div className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/donation">Donation</Link>
            <Link to="/financial-aid">Financial Aid</Link>
            <Link to="/voting">Voting</Link>
            </div>
        </div>
      </nav>

      <div className="banner">
        <h1>Government Crowdfunding Platform</h1>
      </div>

      <div className="features-container">
        <div className="feature">
          <h2>Donate</h2>
          <p>Support government initiatives through secure and transparent donations.</p>
        </div>
        <div className="feature">
          <h2>Financial Aid</h2>
          <p>Apply for and receive financial assistance for various programs.</p>
        </div>
        <div className="feature">
          <h2>Voting</h2>
          <p>Participate in decision-making processes through secure online voting.</p>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
