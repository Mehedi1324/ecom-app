import React from 'react';
import '../Stylings/OrderNow.css';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
const OrderNow = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.ecomCartItems;
  const subTotal = cartItems.reduce(
    (x, item) => x + item.price * item.quantity,
    0
  );
  const totalProduct = cartItems.reduce((x, item) => x + item.quantity, 0);
  console.log(totalProduct);
  const vat = parseFloat((subTotal * 0.1).toFixed(2));
  const finalCost = subTotal + vat;
  return (
    <div>
      <div className="add__banner">
        <h2>One Step Checkout</h2>
      </div>
      <Row className="container mb-5">
        {/* ______________Shipping address___________________________ */}

        <Col md={6} lg={4} sm={12} xs={12} className="address">
          <div className="shipping pb-5">
            <h2>SHIPPING ADDRESS</h2>
            <div>
              <span className="input__title">
                Email Address <span style={{ color: 'red' }}>*</span>
              </span>
              <br />
              <input type="email" />
            </div>
            <div>
              <span className="input__title">
                First Name <span style={{ color: 'red' }}>*</span>
              </span>
              <br />
              <input type="text" />
            </div>
            <div>
              <span className="input__title">
                Last Name <span style={{ color: 'red' }}>*</span>
              </span>
              <br />
              <input type="text" />
            </div>
            <div>
              <span className="input__title">
                Street Address <span style={{ color: 'red' }}>*</span>
              </span>
              <br />
              <input type="text" />
            </div>
            <div>
              <span className="input__title">
                Zip/Postal Code <span style={{ color: 'red' }}>*</span>
              </span>
              <br />
              <input type="number" />
            </div>
            <div>
              <span className="input__title">
                Phone Number <span style={{ color: 'red' }}>*</span>
              </span>
              <br />
              <input type="number" />
            </div>
          </div>
        </Col>

        {/* _________________________Shipping Methods____________________________ */}

        <Col md={6} lg={4} sm={12} xs={12} className="methods">
          <div className="shipping shipping__method">
            <h2>SHIPPING METHODS</h2>

            <div className="fast__delivery">
              <p>
                <input type="checkbox" className="check" /> $0.00 Free Normal
                Delivery
              </p>
              <p>
                <input type="checkbox" className="check" /> $20.00 Fixed Super
                Fast Delivery
              </p>
            </div>

            <div>
              <span>Delivery Date</span>
              <br />
              <input type="text" />
            </div>
          </div>
          {/* Payment method */}

          <div className="shipping shipping__method">
            <h2>PAYMENT METHODS</h2>
            <div>
              <p>
                <input type="checkbox" className="check" /> Mobile Banking
              </p>
              <p>
                <input type="checkbox" className="check" /> Cash On Delivery
              </p>
              <p>
                <input type="checkbox" className="check" /> Bank Transfer
                Payment
              </p>
              <p>
                <input type="checkbox" className="check" /> Paypal
              </p>
            </div>
          </div>
        </Col>

        {/* ____________________Order Summary_____________________ */}

        <Col md={6} lg={4} sm={12} xs={12} className="summery">
          <div className="shipping">
            <h2>ORDER SUMMARY</h2>
            <div>
              <p>
                {' '}
                Total :
                <span style={{ color: 'red', fontWeight: '500' }}>
                  {' '}
                  {totalProduct}
                </span>{' '}
                items
              </p>
            </div>
            <div className="my-3">
              <div className="totals">
                <h5>CART SUBTOTAL</h5>{' '}
                <p style={{ color: 'black' }}>$ {subTotal}</p>{' '}
              </div>
              <div className="totals total__shipping pt-3">
                <h5>Vat (10%)</h5> <p style={{ color: 'black' }}>$ {vat}</p>{' '}
              </div>
              <div className="totals total__cost mt-3">
                <h4> TOTAL COST</h4>{' '}
                <p
                  style={{
                    color: 'black',
                    fontWeight: 800,
                    fontFamily: 'cursive !important',
                  }}
                >
                  $ {finalCost}
                </p>
              </div>
            </div>
            <div className="news__check">
              <p>
                <input type="checkbox" className="check" />
                Sign Up for Our Newsletter
              </p>
            </div>
            <div onSubmit="#">
              <input
                className="discount"
                type="text"
                placeholder="Enter discount code"
              />
              <input
                type="submit"
                value="Apply Discount "
                className="order__btn"
              />
            </div>
            <div>
              <p>
                <input type="checkbox" className="check" />
                Sign Up for Our Newsletter
              </p>
            </div>
            <input type="button" value="PLACE ORDER" className="order__btn" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OrderNow;
