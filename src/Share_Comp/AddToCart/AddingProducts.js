import React from 'react';

const AddingProducts = () => {
  const addingCardProduct = (props) => {
    const addedProduct = props.product;
    const product = addedProduct;
    console.log(product);
    fetch('http://localhost:1010/card', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    });
  };
  return { addingCardProduct };
};

export default AddingProducts;
