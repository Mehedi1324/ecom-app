import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addToCart } from '../../action/cartAction';
import '../Stylings/SingleItem.css';
import Supports from './Supports';
const SingleItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const url = `https://m-shop.vercel.app/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const handleAddToCart = () => {
    dispatch(addToCart(product, quantity));
  };

  return (
    <>
      <div className="add__banner">
        <h2>Single Item </h2>
      </div>
      <div className="single__item">
        <Row className="single__item__row">
          <Col md={6} sm={12} lg={6} xs={12}>
            <div className="product__img">
              <img src={product.img} alt="Product img" />
            </div>
          </Col>
          <Col md={6} sm={12} lg={6} xs={12}>
            <div className="rating">
              <p style={{ display: 'flex', margin: '0px' }}>
                {Array(product.rating)
                  .fill()
                  .map(() => (
                    <p>⭐</p>
                  ))}
              </p>
            </div>
            <h4>{product.name}</h4>
            <h3>$ {product.price}</h3>
            <p>Color:</p>
            <span className="radio__btn">
              <div className="radio">
                <input className="r1" type="radio" name="radio" />
                <p>red</p>
              </div>
              <div className="radio">
                <input className="r2" type="radio" name="radio" />
                <p>black</p>
              </div>
              <div className="radio">
                <input className="r3" type="radio" name="radio" />
                <p>blue</p>
              </div>
            </span>
            <p>Quantity:</p>
            <div className="quantity">
              <FaMinus
                onClick={() => dispatch(product, setQuantity(quantity - 1))}
              />
              <p>{quantity}</p>
              <FaPlus
                onClick={() => dispatch(product, setQuantity(quantity + 1))}
              />
            </div>
            <div className="card__btn">
              <input
                onClick={handleAddToCart}
                type="submit"
                value="Add to cart"
              />
              <Link to="/order">
                <input type="submit" value="Check Order" />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      <Supports />
    </>
  );
};

export default SingleItem;
