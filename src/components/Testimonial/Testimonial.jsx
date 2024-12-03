"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import "./Testimonial.css"
import TestimonialCard from '../Cards/TestimonialCard';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
      const fetchTestimonials = async () => {
        try {
          const response = await fetch("/Testimonials.json");
          const data = await response.json();
          setTestimonials(data);
        } catch (error) {
          console.error("Error fetching testimonials:", error);
        }
      };
  
      fetchTestimonials();
    }, []);
    return (
        <div className="testimonials">
      <div className="section-header">
        <h2>Learners love EduPath. See why they rate us 4.9 out of 5</h2>
        
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        navigation 
        pagination={{ clickable: true }} 
        modules={[Navigation, Pagination]} 
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );
};

export default Testimonial;


