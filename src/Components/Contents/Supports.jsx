import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Stylings/Supports.css';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
const Supports = () => {
  return (
    <div className="support__container">
      <Row className="supports">
        <Col md={6} lg={3} sm={12} data-aos="fade-down-right">
          <div className="services">
            <section className="icon">
              <DirectionsCarIcon sx={{ fontSize: '50px', color: '#747371' }} />
            </section>
            <div>
              <h4>FREE SHIPPING</h4>
              <p>Free shipping on all US order or order above $200</p>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3} sm={12} data-aos="fade-down">
          <div className="services">
            <section className="icon">
              <SupportAgentSharpIcon
                sx={{ fontSize: '50px', color: '#747371' }}
              />
            </section>
            <div>
              <h4>SUPPORT 24/7</h4>
              <p>Contact us 24 hours a day, 7 days a week</p>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3} sm={12} data-aos="fade-down">
          <div className="services">
            <section className="icon">
              <RotateRightIcon sx={{ fontSize: '50px', color: '#747371' }} />
            </section>
            <div>
              <h4>30 DAYS RETURN</h4>
              <p>Simply return it within 30 days for an exchange.</p>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3} sm={12} data-aos="fade-down-left">
          <div className="services">
            <section className="icon">
              <AssuredWorkloadOutlinedIcon
                sx={{ fontSize: '50px', color: '#747371' }}
              />
            </section>
            <div>
              <h4>100% PAYMENT SECURE</h4>
              <p>We ensure secure payment with PEV</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Supports;
