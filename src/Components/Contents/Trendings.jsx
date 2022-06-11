import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Stylings/Trendings.css';
const Trendings = () => {
  return (
    <div className="trandings__container">
      <Row>
        {/* Column 01 */}
        <Col className="main_col" lg={4} md={4} sm={12}>
          <Col>
            <div className="tranding_titles">
              <h2>TOP TRENDING</h2>
              <span className="margin"></span>
            </div>
            <p>Top trending in the week</p>
          </Col>
          <Row>
            <Col className="trandings">
              <img src="./image/10037.jpg" alt="" />
              <div>
                <h4>Tess cropped stretch-cloque top</h4>
                <span className="price">$148.00</span>
                <br />
                <button className="crt_btn">Add to Cart</button>
              </div>
            </Col>
            <Col className="trandings">
              <img src="./image/10037.jpg" alt="" />
              <div>
                <h4>Tess cropped stretch-cloque top</h4>
                <span className="price">$148.00</span>
                <br />
                <button className="crt_btn">Add to Cart</button>
              </div>
            </Col>
            <Col className="trandings">
              <img src="./image/10037.jpg" alt="" />
              <div>
                <h4>Tess cropped stretch-cloque top</h4>
                <span className="price">$148.00</span>
                <br />
                <button className="crt_btn">Add to Cart</button>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Column 02 */}
        <Col className="main_col" lg={4} md={4} sm={12}>
          <Col>
            <div className="tranding_titles">
              <h2>TOP SELLING</h2>
              <span className="margin"></span>
            </div>
            <p>Top seller in the week</p>
          </Col>
          <Row>
            <Col className="trandings">
              <img src="./image/10037.jpg" alt="" />
              <div>
                <h4>Tess cropped stretch-cloque top</h4>
                <span className="price">$148.00</span>
                <br />
                <button className="crt_btn">Add to Cart</button>
              </div>
            </Col>
            <Col className="trandings">
              <img src="./image/10037.jpg" alt="" />
              <div>
                <h4>Tess cropped stretch-cloque top</h4>
                <span className="price">$148.00</span>
                <br />
                <button className="crt_btn">Add to Cart</button>
              </div>
            </Col>
            <Col className="trandings">
              <img src="./image/10037.jpg" alt="" />
              <div>
                <h4>Tess cropped stretch-cloque top</h4>
                <span className="price">$148.00</span>
                <br />
                <button className="crt_btn">Add to Cart</button>
              </div>
            </Col>
          </Row>
        </Col>
        {/* Column 03 */}
        <Col className="main_col" lg={4} md={4} sm={12}>
          <Col>
            <div className="tranding_titles">
              <h2>ON-SALE ITEMS</h2>
              <span className="margin"></span>
            </div>
            <p>Top seller in the week</p>
          </Col>
          <Row>
            <Col className="trandings">
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
