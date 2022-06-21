import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Stylings/LatestCollections.css';
import { Link } from 'react-router-dom';
const LatestCollections = () => {
  return (
    <div className="collection__container">
      <div>
        <div className="title">
          <span></span>
          <h2 className="mx-3">LATEST COLLECTIONS</h2>
          <span></span>
        </div>
        <p>Top view in the week</p>
      </div>
      <div className="collections">
        <Row className="rw">
          <Col className="col1" lg={3} md={3} sm={12}>
            <div className="col1__container">
              <img className="col1__img" src="./image/10005.jpg" alt="add" />
              <div className="col1__content">
                <h4>SMART PHONE </h4>
                <h2>UP TO 50%</h2>
                <button>Shop Now</button>
              </div>
            </div>
          </Col>
          <Col lg={9} md={9} sm={12}>
            <Row className="row2">
              <Col className="r2col" md={4} lg={4} sm={6}>
                <img src="./image/10010.jpg" alt="ipad" />
                <Link to="/">iPad Air</Link>
                <br />
                <span className="price">$199.00</span>
              </Col>
              <Col className="r2col" md={4} lg={4} sm={6}>
                <img src="./image/10011.jpg" alt="phone" />
                <Link to="/">iPad Air</Link>
                <br />
                <span className="price">$199.00</span>
              </Col>
              <Col className="r2col" md={4} lg={4} sm={6}>
                <img src="./image/10006.png" alt="watch" />
                <Link to="/">iPad Air</Link>
                <br />
                <span className="price">$199.00</span>
              </Col>

              <Col className="r2col" md={4} lg={4} sm={6}>
                <img src="./image/10008.jpg" alt="mphone" />
                <Link to="/">iPad Air</Link>
                <br />
                <span className="price">$199.00</span>
              </Col>
              <Col className="r2col" md={4} lg={4} sm={6}>
                <img src="./image/10013.jpg" alt="acc" />
                <Link to="/">iPad Air</Link>
                <br />
                <span className="price">$199.00</span>
              </Col>

              <Col className="r2col" md={4} lg={4} sm={6}>
                <img src="./image/lap2.jpg" alt="laptop" />
                <Link to="/">iPad Air</Link>
                <br />
                <span className="price">$199.00</span>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="row3">
          <Col md={4} lg={4} sm={4}>
            <div className="col1__container">
              <img
                className="col1__img"
                src="./image/10023.jpg"
                alt="macbook"
              />
              <div className="col1__content laptop">
                <h4>GET UP TO 50% OFF </h4>
                <h2>MACBOOK AIR</h2>
              </div>
            </div>
          </Col>
          <Col md={4} lg={4} sm={4} className="">
            <span style={{ color: 'red', fontSize: '18px' }}>
              "logo" We can't find products matching the selection.
            </span>
          </Col>
          <Col md={4} lg={4} sm={4}>
            <div className="col1__container">
              <img className="col1__img" src="./image/10024.jpg" alt="" />
              <div className="col1__content smrt_pn">
                <h4>SMART PHONE </h4>
                <h2>UP TO 50%</h2>
                <button>Shop Now</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LatestCollections;
