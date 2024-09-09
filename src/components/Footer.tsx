import React from 'react';
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import './styles/Footer.css'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2 className="footer-section-title">About Us</h2>
            <p className="footer-text">
              Our company is dedicated to providing the best cosmetic products for our customers.
              Quality and customer satisfaction are our top priorities.
            </p>
          </div>

          <div className="footer-section">
            <h2 className="footer-section-title">Contact Us</h2>
            <p className="footer-text">Address: Tashkent, Uzbekistan</p>
            <p className="footer-text">Phone: +998 90 123 45 67</p>
            <p className="footer-text">Email: info@yourcompany.com</p>
          </div>

          <div className="footer-section">
            <h2 className="footer-section-title">Follow Us</h2>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                <AiFillFacebook size={30} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                <AiFillTwitterCircle size={30} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                <AiFillInstagram size={30} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-legal-info">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
