import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Stylings/Blog.css';
const Blog = () => {
  return (
    <div className="blog__container">
      <div data-aos="fade-down">
        <div className="title">
          <span></span>
          <h2 className="mx-3">LATEST FROM BLOG</h2>
          <span></span>
        </div>
        <p
          style={{
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          The freshest and most exciting news
        </p>
      </div>
      <div>
        <Row data-aos="fade-down">
          <Col md={4} sm={12} lg={4} xs={12} className="col">
            <div className="col__cont">
              <img src="./image/10043.jpg" alt="" />
              <div>
                <Link to={'/'}>Prada Collection For Men 2017</Link>
                <br />
                <span>By admin on Sep 23, 2021</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita officiis est ducimus quae quo facere suscipit in
                  culpa, libero vero.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} sm={12} lg={4} xs={12} className="col">
            <div className="col__cont">
              <img src="./image/10044.jpg" alt="" />
              <div>
                <Link to={'/'}>Suspendisse consequat orci</Link>
                <br />
                <span>By admin on Sep 23, 2021</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita officiis est ducimus quae quo facere suscipit in
                  culpa, libero vero.
                </p>
              </div>
            </div>
          </Col>

          <Col md={4} sm={12} lg={4} xs={12} className="col">
            <div className="col__cont">
              <img src="./image/10045.jpg" alt="" />
              <div>
                <Link to={'/'}></Link>
                <br />
                <span>Burberry Collection For Women2017</span>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita officiis est ducimus quae quo facere suscipit in
                  culpa, libero vero.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Blog;
