export const cartReducer = (state = { ecomCartItems: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const exists = state.ecomCartItems.find(
        (item) => item._id === action.payload._id
      );
      if (exists) {
        return {
          ...state,
          ecomCartItems: state.ecomCartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
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
          (item) => item._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
