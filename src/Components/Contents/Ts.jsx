import React from 'react';
import { Col } from 'react-bootstrap';

const Ts = (props) => {
  const { img, name, price } = props.selling;
  return (
    <Col lg={12} md={12} sm={12} className="trandings">
      <img src={img} alt="" />
      <div className="product_details">
        <h4>{name}</h4>
        <span className="price">${price}</span>
        <br />
        <button className="crt_btn">Add to Cart</button>
      </div>
    </Col>
  );
};

export default Ts;
