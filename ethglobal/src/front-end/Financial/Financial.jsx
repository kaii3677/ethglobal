import React from "react";
import './Financial.css'
// Sample financial aids data
const financialAids = [
  {
    id: 1,
    title: "Small Business Grant",
    description: "Support for small businesses affected by economic downturns.",
    duration: "May 1, 2023 - July 31, 2023",
    image: "/placeholder.svg", // Ensure this image is in the public folder
  },
  {
    id: 2,
    title: "Education Scholarship",
    description: "Financial assistance for students pursuing higher education.",
    duration: "June 15, 2023 - August 15, 2023",
    image: "/placeholder.svg", // Ensure this image is in the public folder
  },
  {
    id: 3,
    title: "Healthcare Support Fund",
    description: "Aid for individuals facing unexpected medical expenses.",
    duration: "Ongoing",
    image: "/placeholder.svg", // Ensure this image is in the public folder
  },
];

export default function FinancialAidsPage() {
  return (
    <div className="financial-aids-container">
      <div className="hero-banner">
        <h1 className="hero-title">Financial Aids</h1>
        <button className="apply-btn">Apply</button>
      </div>

      <h2 className="section-title">Apply for Financial Aids</h2>
      <p className="section-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
        mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
        neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
        Phasellus molestie magna non est bibendum non venenatis nisl tempor.
      </p>

      <div className="section-separator" />

      <h3 className="available-aids-title">Available Financial Aids</h3>

      <div className="financial-aids-list">
        {financialAids.map((aid) => (
          <div key={aid.id} className="aid-card">
            <div className="card-image">
              <img
                src={aid.image}
                alt={aid.title}
                width={100}
                height={100}
                className="image"
              />
              <p className="duration">{aid.duration}</p>
            </div>
            <div className="card-content">
              <h4 className="card-title">{aid.title}</h4>
              <p className="card-description">{aid.description}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
