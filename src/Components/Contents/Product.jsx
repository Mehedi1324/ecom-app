import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { FaSearchPlus, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../action/cartAction';
import '../Stylings/Product.css';
const Product = (props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const { name, img, price } = props.product;
  const handleAddToCart = () => {
    dispatch(addToCart(props.product, quantity));
  };
  return (
    <Col className="r2col" md={4} lg={4} sm={6}>
      <div className="product__container">
        <img className="pro__img" src={img} alt="pic" />

        <div className="product__content">
          <div className="hidden__btn">
            <Link to={`/product/${props.product._id}`}>
              <button className="hov__icon">View Product</button>
            </Link>

            <button onClick={handleAddToCart} className="hov__icon">
              Add to card
            </button>
          </div>
        </div>
      </div>
      <Link to={`/product/${props.product._id}`}>{name}</Link>
      <br />
      <span className="price">${price}</span>
    </Col>
  );
};

export default Product;
