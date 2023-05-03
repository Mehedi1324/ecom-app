import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Stylings/LatestCollections.css';
import MostSelling from './MostSelling';

const TopSellings = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://m-shop-backend.vercel.app/most_sellings')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="collection__container">
      <div data-aos="fade-down">
        <div className="title">
          <span></span>
          <h2 className="mx-3">MOST SELLING PRODUCTS</h2>
          <span></span>
        </div>
        <p>Top view in the week</p>
      </div>
      <div className="collections">
        <Row className="rw">
          <Col lg={9} md={9} sm={12} data-aos="fade-down">
            <Row className="row2 mt-4">
              {products.map((product) => (
                <MostSelling product={product} key={product.name} />
              ))}
            </Row>
          </Col>

          {/* ___________________________________________________________ */}

          <Col className="col1" lg={3} md={3} sm={12} data-aos="fade-left">
            <div className="col1__container">
              <img className="col1__img" src="./image/10029.jpg" alt="add" />

              <div className="col1__content laptop__add">
                <h4>THE NEW LAPTOP </h4>
                <h2>NEW VISION</h2>
                <button className="hov__icon">Shop Now</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="addRow">
        <Col md={6} lg={6} sm={12} data-aos="fade-right">
          <div className="col1__container">
            <img className="col1__img" src="./image/10035.jpg" alt="add" />

            <div className="col1__content watch">
              <h4>THE ULTIMATE </h4>
              <h2>FITNESS WATCH</h2>
            </div>
          </div>
        </Col>
        <Col md={6} lg={6} sm={12} data-aos="fade-left">
          <div className="col1__container">
            <img className="col1__img" src="./image/10036.jpg" alt="add" />

            <div className="col1__content headphone">
              <h4>SUMMER SELL </h4>
              <h2>UP TO 70%</h2>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TopSellings;
