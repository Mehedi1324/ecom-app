import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from '../src/reducer/cartReducer';
const rootReducer = combineReducers({
  cartReducer: cartReducer,
});
const ecomCartItems = localStorage.getItem('ecomCartItems')
  ? JSON.parse(localStorage.getItem('ecomCartItems'))
  : [];
const initialState = {
  cartReducer: {
    ecomCartItems: ecomCartItems,
  },
};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
