import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Stylings/Categories.css';
const Categories = () => {
  return (
    <div className="cate__container" data-aos="fade-down">
      <Row>
        <Col className=" mb-4" md={6} lg={6} sm={12} xs={12}>
          <div className="menu__container main">
            <img className="menu__img" src="./image/10001.jpg" alt="" />

            <div className="menu__content">
              <button className="btn1">Laptop</button>
            </div>
          </div>
        </Col>
        <Col className="col1" md={6} lg={6} sm={12} xs={12}>
          <Row className="second__row">
            <Col md={6} lg={6} sm={6} xs={6}>
              {' '}
              <div className="menu__container">
                <img className="menu__img" src="./image/10002.jpg" alt="" />

                <div className="menu__content">
                  <button className="btn1">Accessories</button>
                </div>
              </div>
            </Col>
            <Col className="watch" md={6} lg={6} sm={6} xs={6}>
              <div className="menu__container">
                <img className="menu__img" src="./image/10003.jpg" alt="" />

                <div className="menu__content">
                  <button className="btn1">iWatch</button>
                </div>
              </div>
            </Col>
          </Row>
          <Col md={12} lg={12} sm={12} className="camera__col">
            <div className="menu__container camera">
              <img className="menu__img " src="./image/10004.jpg" alt="" />

              <div className="menu__content">
                <button className="btn1">Camera</button>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Categories;
