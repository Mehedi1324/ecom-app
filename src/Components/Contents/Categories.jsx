import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Stylings/Categories.css';
const Categories = () => {
  return (
    <div className="cate__container">
      <Row gap={2}>
        <Col md={6} lg={6} sm={12}>
          <img src="./image/10001.jpg" alt="" />
        </Col>
        <Col md={6} lg={6} sm={12}>
          <Row className="second__row">
            <Col md={6} lg={6} sm={12}>
              {' '}
              <img src="./image/10002.jpg" alt="" />
            </Col>
            <Col md={6} lg={6} sm={12}>
              <img src="./image/10003.jpg" alt="" />
            </Col>
          </Row>
          <Col md={12} lg={12} sm={12}>
            <img src="./image/10004.jpg" alt="" />
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Categories;
