import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import bannerImage from '../../assets/login banner 2.png';

import './Login.css';

const Login = () => {
  return (
    <div>
      <nav className="nav">
        
        <div className="nav-links">
          <Link to="#features-container" className="nav-link">
            Our Services
          </Link>
          <Link to="#footer" className="nav-link">
            Contact Us
          </Link>
        </div>
      </nav>

        <div className="banner">
                  <img src={bannerImage} alt="Login Banner" className="banner-image" />
        </div>

      <div className="login-button-container">
        <div className="login-button">
          <Link to="/mainpage">
            <p>Connect Wallet</p>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div id="features-container" className="features-container">
        <div className="feature">
          <h2>Donation</h2>
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

      {/* Footer Section */}
      <div id="footer" className='footer'>
        <p>Contact us at: contact@company.com</p>
        <p>Follow us on social media!</p>
      </div>
    </div>
  );
};

export default Login;
