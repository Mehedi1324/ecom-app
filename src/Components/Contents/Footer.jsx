import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Stylings/Footer.css';
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaPinterestP,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
      <div className="footer__container">
        <div>
          <Row className="row">
            <div className="logo" data-aos="zoom-in">
              <img src="./image/Logo.png" alt="logo" />
            </div>
            <Col lg={3} md={6} sm={6} xs={12} data-aos="fade-up-right">
              <div className="column">
                <div className="category">
                  <h4>Address</h4>
                  <div className="address d-flex">
                    <div>
                      <FaMapMarkerAlt className="add__svg" />
                    </div>{' '}
                    <span className="add_dit1">
                      {' '}
                      184 Main Rd E, St Albans VIC 3021, Australia
                    </span>
                  </div>
                  <div className="address d-flex">
                    <div>
                      <FaEnvelope className="add__svg" />
                    </div>{' '}
                    <span className="add_dit1"> contact@company.com</span>
                  </div>
                  <div className="address d-flex">
                    <div>
                      <FaPhoneAlt className="add__svg" />
                    </div>{' '}
                    <span className="add_dit1"> +001 2233 456</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              className="category"
              lg={3}
              md={6}
              sm={6}
              xs={12}
              data-aos="fade-up-right"
              data-aos-delay="100"
            >
              <h4>Categories</h4>
              <Link to="#">Smart Watch</Link>
              <br />
              <Link to="#">Smart Phone</Link>
              <br />
              <Link to="#">Laptops</Link>
              <br />
              <Link to="#">Gadgets</Link>
              <br />
            </Col>
            <Col
              className="category"
              lg={3}
              md={6}
              sm={6}
              xs={12}
              data-aos="fade-up-right"
              data-aos-delay="200"
            >
              <h4>Information</h4>
              <Link to="#">About Us</Link>
              <br />
              <Link to="#">Contact Us</Link>
              <br />
              <Link to="#">Terms & Conditions</Link>
              <br />
              <Link to="#">Shipping & Delivery</Link>
              <br />
              <Link to="#">Privacy Policy</Link>
              <br />
            </Col>
            <Col
              className="category "
              lg={3}
              md={6}
              sm={6}
              xs={12}
              data-aos="fade-up-right"
              data-aos-delay="300"
            >
              <h4>Quick Links</h4>
              <Link to="#">Store Location</Link>
              <br />
              <Link to="#">My Account</Link>
              <br />
              <Link to="#">Accessories</Link>
              <br />
              <Link to="#">Orders Tracking</Link>
              <br />
              <Link to="#">Size Guide</Link>
              <br />
              <Link to="#">FAQs</Link>
              <br />
            </Col>
          </Row>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom__elements">
          <div>
            <p>Copyright © 2022 M-Shop . Developer Hasan</p>
          </div>
          <div className="social__icons d-flex ">
            <FaTwitter />
            <FaFacebookF />
            <FaGooglePlusG />
            <FaInstagram />
            <FaPinterestP />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
