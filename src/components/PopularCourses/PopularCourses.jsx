"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import "./PopularCourses.css";
import PopularCard from "../Cards/PopularCard";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/Courses.json");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="popular-courses">
      <div className="course-header">
        <h2>Our Popular Courses</h2>
        <p>
          By taking proactive steps to nurture mental health, we can enhance our
          quality of life, build resilience, and foster a sense of inner peace
          and balance.
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3.5 },
        }}
        navigation 
        pagination={{ clickable: true }} 
        modules={[Navigation, Pagination]} 
 
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <PopularCard course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularCourses;
