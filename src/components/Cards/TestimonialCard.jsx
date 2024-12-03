import Image from 'next/image';
import React from 'react';
import "./TestimonialCard.css"
const TestimonialCard = () => {
    return (
        <div className="testimonial-card">
        <div className="profile">
          <Image
            src="/profile.png" 
            alt="Profile Picture"
            className="profile-img"
            width={50}
            height={50}
          />
          <h4 className="profile-name">Kilian Murphe</h4>
        </div>
        <p className="testimonial-text">
        &quot;A fantastic platform with a wide variety of health and wellness courses. The instructors are top-notch, and the content is very engaging.&quot;
        </p>
      </div>
    );
};

export default TestimonialCard;