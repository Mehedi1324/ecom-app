import React from 'react';
import { Col } from 'react-bootstrap';
import AddingProducts from '../../Share_Comp/AddToCart/AddingProducts';

const Ts = (props) => {
  const { img, name, price } = props.product;
  const { addingCardProduct } = AddingProducts();
  return (
    <Col lg={12} md={12} sm={12} className="trandings">
      <img src={img} alt="" />
      <div className="product_details">
        <h4>{name}</h4>
        <span className="price">${price}</span>
        <br />
        <button onClick={() => addingCardProduct(props)} className="crt_btn">
          Add to Cart
        </button>
      </div>
    </Col>
  );
};

export default Ts;
