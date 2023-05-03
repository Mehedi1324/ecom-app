import React, { useState } from 'react';
import '../Stylings/OrderNow.css';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { removeAllItems } from '../../action/cartAction';
import { Link } from 'react-router-dom';
const OrderNow = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.ecomCartItems;
  const subTotal = cartItems.reduce(
    (x, item) => x + item.price * item.quantity,
    0
  );
  const totalProduct = cartItems.reduce((x, item) => x + item.quantity, 0);

  const vat = parseFloat((subTotal * 0.1).toFixed(2));
  const finalCost = subTotal + vat;

  // Bootstrap Modal Setup______________

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Collecting data for database_________________\

  const handleSubmitData = (e) => {
    e.preventDefault();
    const name = e.target.fname.value + ' ' + e.target.lname.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const post_code = e.target.post_code.value;
    const phone_num = e.target.phone.value;
    const date = e.target.date.value;
    const product_cost = subTotal;
    const prodcut_vat = vat;
    const total_cost = finalCost;
    const result = {
      name,
      email,
      address,
      post_code,
      phone_num,
      date,
      product_cost,
      prodcut_vat,
      total_cost,
    };
    const addData = [result, ...cartItems];

    fetch('m-shop.vercel.app/buyerInfo', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
        }
      });
    handleShow();
    e.target.reset();
    dispatch(removeAllItems());
    <Link to="/success"></Link>;
  };

  return (
    <div>
      {/*____________ Bootstrap Modal____________ */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <h5>Successfully Ordered</h5>
        </Modal.Body>

        <Modal.Footer>
          <Link to="/success">
            {' '}
            <Button className="px-3 py-2" variant="primary">
              Finish
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>

      {/* __________________________________________ */}
      <div className="add__banner">
        <h2>One Step Checkout</h2>
      </div>
      <form onSubmit={handleSubmitData}>
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
                <input type="email" name="email" required />
              </div>
              <div>
                <span className="input__title">
                  First Name <span style={{ color: 'red' }}>*</span>
                </span>
                <br />
                <input type="text" name="fname" required />
              </div>
              <div>
                <span className="input__title">
                  Last Name <span style={{ color: 'red' }}>*</span>
                </span>
                <br />
                <input type="text" name="lname" required />
              </div>
              <div>
                <span className="input__title">
                  Street Address <span style={{ color: 'red' }}>*</span>
                </span>
                <br />
                <input type="text" name="address" required />
              </div>
              <div>
                <span className="input__title">
                  Zip/Postal Code <span style={{ color: 'red' }}>*</span>
                </span>
                <br />
                <input type="number" name="post_code" required />
              </div>
              <div>
                <span className="input__title">
                  Phone Number <span style={{ color: 'red' }}>*</span>
                </span>
                <br />
                <input type="number" name="phone" required />
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
                <input type="date" name="date" required />
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
                  value="This option is no longer Available"
                />
                <input
                  type="button"
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
              <input type="submit" value="PLACE ORDER" className="order__btn" />
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default OrderNow;
