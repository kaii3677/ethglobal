import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Mainpage.css';

const Mainpage = () => {
  return (
    <div>
      <nav className="nav">
        <div className='logo'>
            <img src={logo} alt="Logo" />
          </div>
                <div className="nav-links">
                  <Link to="/donation">Donation</Link>
                </div>

                <div className="login-button">
                
                    <p>ur wallet address</p>
                
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
