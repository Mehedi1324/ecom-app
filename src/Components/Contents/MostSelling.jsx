import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Stylings/Product.css';

import { FaSearchPlus, FaShoppingCart } from 'react-icons/fa';
import AddingProducts from '../../Share_Comp/AddToCart/AddingProducts';
const MostSelling = (props) => {
  const { name, img, price } = props.product;
  const { addingCardProduct } = AddingProducts();
  return (
    <Col className="r2col" md={4} lg={4} sm={6}>
      <div className="product__container">
        <img className="pro__img" src={img} />

        <div className="product__content">
          <FaSearchPlus className="hov__icon me-4" />
          <FaShoppingCart
            onClick={() => addingCardProduct(props)}
            className="hov__icon"
          />
        </div>
      </div>
      <Link to="/">{name}</Link>
      <br />
      <span className="price">${price}</span>
    </Col>
  );
};

export default MostSelling;
