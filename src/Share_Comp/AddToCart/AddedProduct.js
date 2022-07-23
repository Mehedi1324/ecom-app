import React, { useState } from 'react';

import { useEffect } from 'react';
const AddedProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:1010/card')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return { products, setProducts };
};

export default AddedProduct;
