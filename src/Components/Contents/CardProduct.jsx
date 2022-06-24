import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
const CardProduct = (props) => {
  const { name, img, price, rating } = props.product;

  console.log(props);
  return (
    <div className="cart__product py-4">
      <div className="cart__details">
        <div>
          <img className="cart__img" src={img} alt="" />
        </div>
        <div>
          <h5>{name}</h5>
          <p className="d-flex">
            {Array(rating)
              .fill()
              .map(() => (
                <p>⭐</p>
              ))}
          </p>
          <p style={{ color: 'red' }}>${price}</p>
        </div>
      </div>

      <div className="quantity">
        <AddIcon />
        <input type="text" placeholder="10" />
        <RemoveIcon />
      </div>
      <div className="me-3">
        <h5>
          {' '}
          <DeleteIcon />
        </h5>
      </div>
    </div>
  );
};

export default CardProduct;
