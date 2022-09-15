import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Stylings/Cart.css';
import { Scrollbars } from 'react-custom-scrollbars-2';

import CardProduct from './CardProduct';
import { useSelector } from 'react-redux';
const Cart = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.ecomCartItems;
  const subTotal = cartItems.reduce(
    (x, item) => x + item.price * item.quantity,
    0
  );
  const vat = parseFloat((subTotal * 0.1).toFixed(2));
  const finalTotal = subTotal + vat;
  const totalProduct = cartItems.reduce((x, item) => x + item.quantity, 0);
  return (
    <div>
      <div className="add__banner" data-aos="fade-down">
        <h2>Shopping Cart</h2>
      </div>
      <div className="container ">
        <Row>
          <Col lg={8} md={12} sm={12} className="product__col">
            <h2>Products</h2>
            <p className="pro__margin"></p>

            <CardProduct />
          </Col>

          {/* Total Costs */}

          <Col lg={4} md={12} sm={12}>
            <div className="costs">
              <h2>Total Cost</h2>
              <p className="pro__margin"></p>
              <div className="cost_details">
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
                <div className="total t2 py-3">
                  Subtotal<span>$ {subTotal}</span>
                </div>
                <div className="total py-3">
                  Tax<span>$ {vat}</span>
                </div>
                <div className="total py-3">
                  <h5>Order Total</h5>{' '}
                  <span style={{ color: 'black', fontWeight: '700' }}>
                    $ {finalTotal}
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
