import React from "react";
import { Link } from "react-router-dom";
import "./Donation.css"; // Changed from './Donation.css' to module import

const Donation = () => {
  const gridItems = [1, 2, 3, 4];

  return (
    <section className='donation-container'>
      <div className='donation-banner' />
      <h2 className='donation-title'>Contribute to the Society</h2>
      <div className='donation-gridContainer'>
        <div className='donation-grid'>
          {gridItems.map((item, index) => (
            <GridItem key={index} />
          ))}
        </div>
      </div>
      <h3 className='callToAction'>
        Your kindness will change the world<br />
        Donate Now!
      </h3>
      <p className='donationCount'>3,029,910 +</p>
      <p className='donationDescription'>
        People from around the world donated via our platform
      </p>
      <button className='donateButton'>Donate Now</button>
      <div className='circleImage' />
    </section>
  );
};

const GridItem = () => (
  <div className='donation-gridItem'>
    <div className='donation-gridImage' />
  </div>
);

export default Donation;
