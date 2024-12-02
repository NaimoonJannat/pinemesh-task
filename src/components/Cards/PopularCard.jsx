import Image from 'next/image';
import React from 'react';
import { FaStar, FaClock, FaBook } from 'react-icons/fa';
import "./PopularCard.css"

const PopularCard = () => {
  return (
    <div className="course-card">
      <div className="card-image">
      <Image
              src="/img1.png" 
              alt="Course Thumbnail"
              width={400}
              height={200}
            />
      </div>
      <div className="card-content">
        <div className="card-tags">
          <span className="tag beginner">Beginner</span>
          <span className="tag category">Nutrition and Diet</span>
        </div>
        <h3 className="card-title">
          Foundation of Sleep: Sleep Science and Sleep Disorders
        </h3>
        <div className="card-rating">
          <FaStar className="star-icon" />
          <FaStar className="star-icon" />
          <FaStar className="star-icon" />
          <FaStar className="star-icon" />
          <FaStar className="star-icon" />
          <span className="rating-value">4.9 (566)</span>
        </div>
        <div className="card-meta">
          <div className="meta-item">
            <FaClock className="meta-icon" />
            <span>6h 34m</span>
          </div>
          <div className="meta-item">
            <FaBook className="meta-icon" />
            <span>3 Lessons</span>
          </div>
        </div>
        <div className="card-footer">
          <div className="instructor">
            <Image
              src="/profile.png" 
              alt="Instructor"
              width={100}
              height={100}
            />
            <span>Kilian Murphe</span>
          </div>
          <div className="price">$40</div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
