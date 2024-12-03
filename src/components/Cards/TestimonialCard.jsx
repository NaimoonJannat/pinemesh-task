import Image from 'next/image';
import React from 'react';
import "./TestimonialCard.css"
const TestimonialCard = ({testimonial}) => {
    return (
        <div className="testimonial-card">
        <div className="profile">
          <Image
            src={testimonial.picture}
            alt={testimonial.name}
            className="profile-img"
            width={50}
            height={50}
          />
        </div>
        <h4 className="profile-name">{testimonial.name}</h4>
        <p className="testimonial-text">
        &quot;{testimonial.testimonial}&quot;
        </p>
      </div>
    );
};

export default TestimonialCard;