import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./Banner.css"
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="left-section">
          <div className="rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} className="star-icon" />
              ))}
            </div>
            <p className="rating-text">4.9 (566)</p>
          </div>
          <h1>#1 Platform Powering Health and Wellness</h1>
          <p className="description">
            We&apos;re restoring home as the primary place of personal well-being
          </p>
          <p className="sub-description">
            Health is not just about what you&apos;re eating. It&apos;s also about what
            you&apos;re thinking and saying.
          </p>
          <div className="buttons">
            <button className="primary-btn">Browse Courses</button>
            <button className="secondary-btn">Get Started</button>
          </div>
        </div>

        <div className="right-section">
          <Image
            src="/banner.png"
            width={400}
            height={600}
            alt="Banner"
            className="banner-image"
          />
          <div className="little-icon">
          <Image
            src="/leaf.png"
            width={80}
            height={80}
            alt="icon"
            className="icon"
          />
          </div>
          <div className="overlay">
            <h2>12,000+</h2>
            <p>Happy learners rely on us regularly</p>
            <small>
              By prioritizing self-care and making informed choices, one can
              enhance their overall quality of life
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
