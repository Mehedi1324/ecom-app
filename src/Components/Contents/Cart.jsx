import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Stylings/Cart.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
const Cart = () => {
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
              <div className="cart__product py-4">
                <div className="cart__details">
                  <div>
                    <img className="cart__img" src="./image/10037.jpg" alt="" />
                  </div>
                  <div>
                    <h5>Name of product</h5>
                    <p>color: Red/Blue</p>
                    <p style={{ color: 'red' }}>$120</p>
                  </div>
                </div>

                <div className="quantity">
                  <AddIcon />
                  <input type="text" placeholder="10" />
                  <RemoveIcon />
                </div>
                <div className="me-3">
                  <h5>
                    {' '}
                    <DeleteIcon />
                  </h5>
                </div>
              </div>
              {/* First Product ends*/}

              <div className="cart__product py-4">
                <div className="cart__details">
                  <div>
                    <img className="cart__img" src="./image/10037.jpg" alt="" />
                  </div>
                  <div>
                    <h5>Name of product</h5>
                    <p>color: Red/Blue</p>
                    <p style={{ color: 'red' }}>$120</p>
                  </div>
                </div>

                <div className="quantity">
                  <AddIcon />
                  <input type="text" placeholder="10" />
                  <RemoveIcon />
                </div>
                <div className="me-3">
                  <h5>
                    {' '}
                    <DeleteIcon />
                  </h5>
                </div>
              </div>
              <div className="cart__product py-4">
                <div className="cart__details">
                  <div>
                    <img className="cart__img" src="./image/10037.jpg" alt="" />
                  </div>
                  <div>
                    <h5>Name of product</h5>
                    <p>color: Red/Blue</p>
                    <p style={{ color: 'red' }}>$120</p>
                  </div>
                </div>

                <div className="quantity">
                  <AddIcon />
                  <input type="text" placeholder="10" />
                  <RemoveIcon />
                </div>
                <div className="me-3">
                  <h5>
                    {' '}
                    <DeleteIcon />
                  </h5>
                </div>
              </div>
              <div className="cart__product py-4">
                <div className="cart__details">
                  <div>
                    <img className="cart__img" src="./image/10037.jpg" alt="" />
                  </div>
                  <div>
                    <h5>Name of product</h5>
                    <p>color: Red/Blue</p>
                    <p style={{ color: 'red' }}>$120</p>
                  </div>
                </div>

                <div className="quantity">
                  <AddIcon />
                  <input type="text" placeholder="10" />
                  <RemoveIcon />
                </div>
                <div className="me-3">
                  <h5>
                    {' '}
                    <DeleteIcon />
                  </h5>
                </div>
              </div>
              <div className="cart__product py-4">
                <div className="cart__details">
                  <div>
                    <img className="cart__img" src="./image/10037.jpg" alt="" />
                  </div>
                  <div>
                    <h5>Name of product</h5>
                    <p>color: Red/Blue</p>
                    <p style={{ color: 'red' }}>$120</p>
                  </div>
                </div>

                <div className="quantity">
                  <AddIcon />
                  <input type="text" placeholder="10" />
                  <RemoveIcon />
                </div>
                <div className="me-3">
                  <h5>
                    {' '}
                    <DeleteIcon />
                  </h5>
                </div>
              </div>
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
