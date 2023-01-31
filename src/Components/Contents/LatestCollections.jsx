import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Stylings/LatestCollections.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from './Product';
const LatestCollections = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://m-shop.vercel.app/latest_collections')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="collection__container" id="latest">
      <div>
        <div className="title" data-aos="fade-down">
          <span></span>
          <h2 className="mx-3">LATEST COLLECTIONS</h2>
          <span></span>
        </div>
        <p data-aos="fade-down">Top view in the week</p>
      </div>
      <div className="collections">
        <Row className="rw">
          <Col className="col1" lg={3} md={3} sm={12}>
            <div className="col1__container" data-aos="fade-down">
              <img className="col1__img" src="./image/10005.jpg" alt="add" />
              <div className="col1__content">
                <h4>Smart Phone </h4>
                <h2>UP TO 50%</h2>
                <button className="hov__icon">Shop Now</button>
              </div>
            </div>
          </Col>

          {/* Products */}

          <Col lg={9} md={9} sm={12}>
            <Row className="row2" data-aos="fade-left">
              {products.map((product) => (
                <Product product={product} key={product.name} />
              ))}
            </Row>
          </Col>
          {/* ____________________________ */}
        </Row>
        <Row className="row3">
          <Col md={4} lg={4} sm={4} data-aos="fade-down">
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
          <Col md={4} lg={4} sm={4} className="hide" data-aos="fade-down">
            <span style={{ color: 'red', fontSize: '18px' }}>
              "logo" We can't find products matching the selection.
            </span>
          </Col>
          <Col md={4} lg={4} sm={4} data-aos="fade-down">
            <div className="col1__container">
              <img className="col1__img" src="./image/10024.jpg" alt="" />
              <div className="col1__content smrt_pn">
                <h4>SMART PHONE </h4>
                <h2>UP TO 50%</h2>
                <button className="hov__icon">Shop Now</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LatestCollections;
