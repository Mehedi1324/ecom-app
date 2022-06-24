import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Stylings/Cart.css';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { useEffect } from 'react';
import CardProduct from './CardProduct';
const Cart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:1010/card')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="add__banner">
        <h2>One Step Checkout</h2>
      </div>
      <div className="container ">
        <Row>
          <Col lg={8} md={12} sm={12} className="product__col">
            <h2>Products</h2>
            <p className="pro__margin"></p>

            <Scrollbars style={{ height: 600 }} className="scroll">
              {products.map((product) => (
                <CardProduct product={product} key={product._id} />
              ))}
            </Scrollbars>
          </Col>

          {/* Total Costs */}

          <Col lg={4} md={12} sm={12}>
            <div className="costs">
              <h2>Total Cost</h2>
              <p className="pro__margin"></p>
              <div className="cost_details">
                <div className="total t2 py-3">
                  Subtotal<span>$798.00</span>
                </div>
                <div className="total py-3">
                  Tax<span>$798.00</span>
                </div>
                <div className="total py-3">
                  <h5>Order Total</h5>{' '}
                  <span style={{ color: 'black', fontWeight: '700' }}>
                    $798.00
                  </span>
                </div>
              </div>
              <Link to="/orders">
                <input
                  className="order__btn w-100 my-4"
                  type="button"
                  value="Proceed To Checkout"
                />
              </Link>

              <br />
              <div className="shop__more">
                <Link to="/">Shop More</Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Cart;
