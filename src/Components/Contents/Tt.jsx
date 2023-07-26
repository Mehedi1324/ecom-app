import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../action/cartAction';
const Tt = (props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { img, name, price } = props.product;
  const handleAddToCart = () => {
    dispatch(addToCart(props.product, quantity));
  };
  return (
    <Col lg={12} md={12} sm={12} className="trandings">
      <img src={img} alt="" />
      <div className="product_details">
        <Link to={`/product/${props.product._id}`}>
          <h4>{name}</h4>
        </Link>
        <span className="price">${price}</span>
        <br />
        <button onClick={handleAddToCart} className="crt_btn">
          Add to Cart
        </button>
      </div>
    </Col>
  );
};

export default Tt;
