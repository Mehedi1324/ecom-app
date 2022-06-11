import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Stylings/LatestCollections.css';
const TopSellings = () => {
  return (
    <div className="collection__container">
      <div>
        <div className="title">
          <span></span>
          <h2 className="mx-3">MOST SELLING PRODUCTS</h2>
          <span></span>
        </div>
        <p>Top view in the week</p>
      </div>
      <div className="collections">
        <Row className="rw">
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
          <Col className="col1" lg={3} md={3} sm={12}>
            <img src="./image/10029.jpg" alt="add" />{' '}
          </Col>
        </Row>
      </div>
      <Row className="addRow">
        <Col md={6} lg={6} sm={12}>
          <img src="./image/10035.jpg" alt="add" />
        </Col>
        <Col md={6} lg={6} sm={12}>
          <img src="./image/10036.jpg" alt="add" />
        </Col>
      </Row>
    </div>
  );
};

export default TopSellings;
