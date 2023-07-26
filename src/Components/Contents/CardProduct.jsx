import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../action/cartAction';
import Rating from '../Contents/Rating.jsx';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
const CardProduct = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.ecomCartItems;
  const dispatch = useDispatch();

  return (
    <>
      {cartItems.map((item) => (
        <div className="booked__place">
          <div className="info__cart">
            <div>
              <img src={item.img} alt="prodcut img" />
            </div>

            <div>
              <h6>{item.name}</h6>
              <div>
                <Rating item={item} key={item.name} />
              </div>
              <p>$ {item.price * item.quantity}</p>
            </div>
          </div>

          <div className="quantity">
            <FaMinus
              onClick={() => {
                dispatch(addToCart(item, item.quantity - 1));
              }}
            />
            <span className="m-1">{item.quantity}</span>
            <FaPlus
              onClick={() => {
                dispatch(addToCart(item, item.quantity + 1));
              }}
            />
          </div>
          <div className="delete">
            <MdDelete onClick={() => dispatch(deleteFromCart(item))} />
          </div>
        </div>
      ))}
    </>
  );
};

export default CardProduct;
