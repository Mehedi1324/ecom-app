import { useState } from 'react';
import AddedProduct from './AddedProduct';

const AddingProducts = () => {
  const { products } = AddedProduct();
  const [cart, setCart] = useState([...products]);

  const addingCardProduct = (props) => {
    // _____________________

    const exist = cart.find((pd) => pd._id === props.product._id);
    let newCart = [];
    console.log(exist);
    if (exist) {
      const rest = cart.filter((pd) => pd._id !== props.product._id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, props.product];
    } else {
      props.product.quantity = 1;
      newCart = [...cart, props.product];
    }
    console.log(newCart);
    setCart(newCart);

    fetch('http://localhost:1010/card', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCart),
    });
  };
  return { addingCardProduct };
};

export default AddingProducts;
