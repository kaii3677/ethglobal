import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Mainpage.css';

const Mainpage = () => {
  return (
    <div>
      

      <div className="main-banner">
        <h1>Government Crowdfunding Platform</h1>
      </div>

      <div className="main-features-container">
        <div className="main-feature">
          <h2>Donate</h2>
          <p>Support government initiatives through secure and transparent donations.</p>
        </div>
        <div className="main-feature">
          <h2>Financial Aid</h2>
          <p>Apply for and receive financial assistance for various programs.</p>
        </div>
        <div className="main-feature">
          <h2>Voting</h2>
          <p>Participate in decision-making processes through secure online voting.</p>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
