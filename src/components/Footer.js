/**
 * Footer Component
 */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import './Footer.css';

function Footer() {
  return (
    <>
    
      {/* The main footer section */}
      <footer className="footer-section py-4">
        <Container>
          <Row className="justify-content-center">
            {/* Social Icons */}
            <Col xs={12} className="text-center mb-3">
              <div className="social-icons-container">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon-circle">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon-circle">
                  <FaTwitter />
                </a>
              
               
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="social-icon-circle">
                   <FaLinkedinIn />
                </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-icon-circle">
                  <FaYoutube />
                </a>
              </div>
            </Col>
            {/* Email and Copyright */}
            <Col xs={12} className="text-center">
              <p className="footer-email">Example@Email.com</p>
              <p className="footer-copyright">
                Copyright © 2025 Home. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;