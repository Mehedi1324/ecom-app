export const cartReducer = (state = { ecomCartItems: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const exists = state.ecomCartItems.find(
        (item) => item.name === action.payload.name
      );
      if (exists) {
        return {
          ...state,
          ecomCartItems: state.ecomCartItems.map((item) =>
            item.name === action.payload.name ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          ecomCartItems: [...state.ecomCartItems, action.payload],
        };
      }
    case 'DELETE_FROM_CART':
      return {
        ...state,
        ecomCartItems: state.ecomCartItems.filter(
          (item) => item.name !== action.payload.name
        ),
      };

    default:
      return state;
  }
};
