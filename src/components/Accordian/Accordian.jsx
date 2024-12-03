"use client";
import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import "./Accordian.css";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-left">
        <h2>We provide...</h2>

        {/* Accordion Items */}
        {[
          { title: "Personalized routine", description: "We create tailored routines designed to meet your specific needs and goals. Whether you're focusing on professional development, personal growth, or mastering a skill, our personalized plans ensure you stay on track and make steady progress." },
          { title: "Follow-up after completing courses", description: "We believe learning doesn't stop when the course ends. Our team provides regular follow-ups to ensure you’re applying what you’ve learned, addressing any challenges you face, and supporting you in achieving long-term success." },
          { title: "Access to additional resources", description: "Get exclusive access to a wealth of resources, including advanced tools, comprehensive guides, interactive templates, and expert-curated materials. These resources are designed to help you deepen your understanding and achieve your objectives faster." },
          { title: "Free community support", description: "Join a vibrant community of like-minded individuals ready to support, guide, and inspire you. Participate in discussions, share experiences, and get advice from peers and experts—all at no additional cost." },
        ].map((item, index) => (
          <div className="accordion-item" key={index}>
            <div
              className={`accordion-header ${isOpen === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <span
                className={`icon ${isOpen === index ? "icon-active" : ""}`}
              >
               <FaCircleCheck />
              </span>
              {item.title}
            </div>
            {isOpen === index && (
              <div className="accordion-content">{item.description}</div>
            )}
          </div>
        ))}

        <button className="learn-more-btn">Learn More About Our Services</button>
      </div>

      <div className="accordion-right">
        <Image
          src="/pic1.png"
          alt="Image description"
          width={500}
          height={500}
          className="image"
        />
        <div className="icon">
          <Image
            src="/icon2.png"
            alt="Icon description"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
