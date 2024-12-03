import Image from 'next/image';
import React from 'react';
import { MdMenuBook } from "react-icons/md";
import { BiSolidStarHalf } from "react-icons/bi";
import { FaStar, FaClock } from 'react-icons/fa';
import "./PopularCard.css";

const PopularCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="card-image">
        <Image
          src={course.thumbnail}
          alt="Course Thumbnail"
          width={400}
          height={200}
        />
      </div>
      <div className="card-content">
        <div className="card-tags">
          <span className={`tag beginner ${course.level.toLowerCase()}`}>{course.level}</span>
          <span className="tag category">{course.category}</span>
        </div>
        <h3 className="card-title">{course.title}</h3>
        <div className="card-rating">
          {[...Array(Math.floor(course.rating))].map((_, i) => (
            <FaStar className="star-icon" key={i} />
          ))}
          {course.rating % 1 !== 0 && <BiSolidStarHalf className="star-icon" />}
          <span className="rating-value">
            {course.rating} ({course.reviews})
          </span>
        </div>
        <div className="card-meta">
          <div className="meta-item">
            <FaClock className="meta-icon" />
            <span>{course.duration}</span>
          </div>
          <div className="meta-item">
            <MdMenuBook className="meta-icon" />
            <span>{course.lessons} Lessons</span>
          </div>
        </div>
        <div className="card-footer">
          <div className="instructor">
            <Image
              src={course.instructor.profileImage}
              alt="Instructor"
              width={100}
              height={100}
            />
            <span>{course.instructor.name}</span>
          </div>
          <div className="price">{course.price}</div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
