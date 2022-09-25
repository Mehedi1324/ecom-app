export const addToCart = (product, quantity) => (dispatch, getState) => {
  var ecomCartItems = {
    _id: product._id,
    name: product.name,
    img: product.img,
    price: product.price,
    rating: product.rating,
    quantity: Number(quantity),
  };

  if (ecomCartItems.quantity > 0) {
    if (ecomCartItems.quantity > 15) {
      alert(
        'If you want to buy more then 15 of same product, please contact us !'
      );
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: ecomCartItems });
      localStorage.setItem(
        'ecomCartItems',
        JSON.stringify(getState().cartReducer.ecomCartItems)
      );
    }
  }
};

export const deleteFromCart = (product) => (dispatch, getState) => {
  dispatch({ type: 'DELETE_FROM_CART', payload: product });
  localStorage.setItem(
    'ecomCartItems',
    JSON.stringify(getState().cartReducer.ecomCartItems)
  );
};

export const removeAllItems = () => (dispatch, getState) => {
  dispatch({ type: 'REMOVE_ALL' });
  localStorage.setItem(
    'ecomCartItems',
    JSON.stringify(getState().cartReducer.ecomCartItems)
  );
};
