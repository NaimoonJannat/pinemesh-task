import React from 'react';
import { FaInstagram, FaFacebook, FaDiscord, FaEnvelope } from 'react-icons/fa';
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>Nutrition and diet</li>
            <li>Fitness training</li>
            <li>Mindfulness</li>
            <li>Mental health</li>
            <li>Personal growth</li>
            <li>Social well-being</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li>About us</li>
            <li>Our partners</li>
            <li>Investors</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>FAQ</li>
            <li>Refund policies</li>
            <li>Terms and conditions</li>
            <li>Cookie</li>
            <li>Latest posts</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Get in touch</li>
            <li>Visit our forum</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-links">
          <span>Join our official channels</span>
          <FaInstagram />
          <FaEnvelope />
          <FaFacebook />
          <FaDiscord />
        </div>
        <div className="copyright">
          <p>© 2024 EduPath. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
