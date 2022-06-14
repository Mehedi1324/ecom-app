import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Contents/Home';
import Register from './Components/Contents/Register';
import Subscription from './Components/Contents/Subscription';
import Cart from './Components/Contents/Cart';
import OrderNow from './Components/Contents/OrderNow';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<OrderNow />} />
      </Routes>
      <Subscription />
    </Router>
  );
}

export default App;
