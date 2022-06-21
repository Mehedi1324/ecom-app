import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Stylings/Trendings.css';
const Trendings = () => {
  return (
    <div className="trandings__container">
      <Row>
        {/* Column 01 */}
        <Col className="main_col" lg={4} md={6} sm={12}>
          <Col lg={12} md={12} sm={12}>
            <div className="tranding_titles my-4">
              <h2>TOP TRENDING</h2>

              <p>Top trending in the week</p>
            </div>
            <h3 className="margin"></h3>
          </Col>
          <Row>
            <Col lg={12} md={12} sm={12} className="trandings">
              <img src="./image/10037.jpg" alt="" />
              <div className="product_details">
                <h4>Tess cropped stretch-cloque top</h4>
                <span className="price">$148.00</span>
                <br />
                <button className="crt_btn">Add to Cart</button>
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} className="trandings">
              <img src="./image/10037.jpg" alt="" />
              <div className="product_details">
                <h4>Tess cropped stretch-cloque top</h4>
                <span className="price">$148.00</span>
                <br />
                <button className="crt_btn">Add to Cart</button>
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} className="trandings">
              <img src="./image/10037.jpg" alt="" />
              <div className="product_details">
                <h4>Tess cropped stretch-cloque top</h4>
                <span className="price">$148.00</span>
                <br />
                <button className="crt_btn">Add to Cart</button>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Column 02 */}
        <Col className="main_col " lg={4} md={6} sm={12}>
          <Col lg={12} md={12} sm={12}>
            <div className="tranding_titles my-4">
              <h2>TOP SELLING</h2>

              <p>Top seller in the week</p>
            </div>
            <h3 className="margin"></h3>
          </Col>
          <Row>
            <Col lg={12} md={12} sm={12} className="trandings">
              <img class src="./image/10037.jpg" alt="" />
              <div className="product_details">
                <h4>Tess cropped stretch-cloque top</h4>
                <span className="price">$148.00</span>
                <br />
                <button className="crt_btn">Add to Cart</button>
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} className="trandings">
              <img src="./image/10037.jpg" alt="" />
              <div className="product_details">
                <h4>Tess cropped stretch-cloque top</h4>
                <span className="price">$148.00</span>
                <br />
                <button className="crt_btn">Add to Cart</button>
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} className="trandings">
              <img src="./image/10037.jpg" alt="" />
              <div className="product_details">
                <h4>Tess cropped stretch-cloque top</h4>
                <span className="price">$148.00</span>
                <br />
                <button className="crt_btn">Add to Cart</button>
              </div>
            </Col>
          </Row>
        </Col>
        {/* Column 03 */}
        <Col className="main_col ps-4" lg={4} md={12} sm={12}>
          <Col lg={12} md={12} sm={12}>
            <div className="tranding_titles my-4">
              <h2>ON-SALE ITEMS</h2>

              <p>Top seller in the week</p>
            </div>
            <h3 className="margin"></h3>
          </Col>
          <Row>
            <Col lg={12} md={12} sm={12} className="trandings">
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
