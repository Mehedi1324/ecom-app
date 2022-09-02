import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Stylings/Trendings.css';
import Ts from './Ts';
import Tt from './Tt';
const Trendings = () => {
  const [topTrending, setTopTrending] = useState([]);
  const [topSelling, setTopSelling] = useState([]);
  useEffect(() => {
    fetch('https://nameless-beyond-44550.herokuapp.com/trending')
      .then((res) => res.json())
      .then((data) => setTopTrending(data));
  }, []);
  useEffect(() => {
    fetch('https://nameless-beyond-44550.herokuapp.com/top_selling')
      .then((res) => res.json())
      .then((data) => setTopSelling(data));
  }, []);

  return (
    <div className="trandings__container">
      <Row>
        {/* Column 01 */}
        <Col className="main_col" lg={4} md={6} sm={12}>
          <Col lg={12} md={12} sm={12} data-aos="fade-down">
            <div className="tranding_titles my-4">
              <h2>TOP TRENDING</h2>

              <p>Top trending in the week</p>
            </div>
            <h3 className="margin">{}</h3>
          </Col>
          <Row data-aos="fade-down">
            {topTrending.map((product) => (
              <Tt product={product} key={product.name} />
            ))}
          </Row>
        </Col>

        {/* Column 02 */}
        <Col className="main_col " lg={4} md={6} sm={12}>
          <Col lg={12} md={12} sm={12} data-aos="fade-down">
            <div className="tranding_titles my-4">
              <h2>TOP SELLING</h2>

              <p>Top seller in the week</p>
            </div>
            <h3 className="margin">{}</h3>
          </Col>
          <Row data-aos="fade-down">
            {topSelling.map((product) => (
              <Ts product={product} key={product.name} />
            ))}
          </Row>
        </Col>
        {/* Column 03 */}
        <Col className="main_col ps-4" lg={4} md={12} sm={12}>
          <Col lg={12} md={12} sm={12} data-aos="fade-down">
            <div className="tranding_titles my-4 ">
              <h2>ON-SALE ITEMS</h2>

              <p>Top seller in the week</p>
            </div>
            <h3 className="margin">{}</h3>
          </Col>
          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              className="trandings"
              data-aos="fade-down"
            >
              <span className="p">
                We can't find products matching the selection.
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Trendings;
