
import React from 'react';
import { assets } from '../../assets/assets'
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='footer' id="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <img src={assets.logo} alt='Everest Eats Logo' className="footer-logo" />
          <p>"Experience the rich and authentic flavors of Nepal, crafted with care and tradition. From our kitchen to your home, we bring you the freshest and most delicious Nepali cuisine. Savor the taste of our heritage, delivered right to your doorstep!"</p>
          <div className="footer-social-icon">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
        
        {/* Center Section */}
        <div className="footer-center">
          <h2>Company</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#delivery">Delivery</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        
        {/* Right Section */}
        <div className="footer-right">
          <h2>Get In Touch</h2>
          <ul>
            <li><a href="tel:+9779812345678"><FontAwesomeIcon icon={faPhone} /> +977 9812345678</a></li>
            <li><a href="mailto:boss@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> boss@gmail.com</a></li>
            <li><a href="https://www.google.com/maps/place/Nepal" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMapMarkerAlt} /> 123, Kathmandu, Nepal</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className='copyright-text'>Copyright 2024 @ EverestEats.com - All Rights Reserved.</p>
        <ul className="footer-legal">
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#cookies">Cookies Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
