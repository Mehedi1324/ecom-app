import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Contents/Home';
import Register from './Components/Contents/Register';
import Subscription from './Components/Contents/Subscription';
import Cart from './Components/Contents/Cart';
import OrderNow from './Components/Contents/OrderNow';
import Footer from './Components/Contents/Footer';
import Header from './Components/Contents/Header';
import Login from './Components/Contents/Login';
import AuthProvider from './Share_Comp/Hooks/AuthProvider';
import PrivateRoute from './Share_Comp/Hooks/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/orders"
            element={
              <PrivateRoute>
                <OrderNow />
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<Login />} />
        </Routes>
        <Subscription />
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
