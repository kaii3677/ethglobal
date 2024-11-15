import React from "react";
import  './DonationDetails.css';

function DonationDetails() {
  return (
    <main className='dd-container'>
      <div className='dd-content'>
        <section className='dd-projectInfo'>
          <div className='dd-imageColumn'>
            <div className='dd-projectImage' />
          </div>
          <div className='dd-detailsColumn'>
            <article className='dd-projectDetails'>
              <h1 className='dd-projectTitle'>Title of the Project</h1>
              <div className="dd-infoRow">
                <p className="dd-donationDeadline">Donation closed by 11 Nov 2025</p>
                <div className="dd-donatorInfo">
                    <div className="dd-donatorIcon" />
                    <p className="dd-donatorCount">67,289 donators</p>
                </div>
                </div>

              <p className='dd-projectDescription'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </article>
          </div>
        </section>
        <button className='dd-donateButton'>Donate Now</button>
        <div className='dd-buttonRow'>
            <button className='dd-exploreButton'>Back to Home</button>
            <button className='dd-backHomeButton'>Explore More Projects</button>
        </div>

      </div>
    </main>
  );
}

export default DonationDetails;