import React from 'react';
import '../Stylings/Header.css';
import { Row, Col, Button } from 'react-bootstrap';

import {
  FaEnvelope,
  FaPhoneAlt,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Share_Comp/Hooks/AuthProvider';
import { buttonBaseClasses } from '@mui/material';

const Header = () => {
  const { handleLogout, user } = useAuth();
  const [navbar, setNavbar] = useState(false);
  const stickyNav = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', stickyNav);
  return (
    <div>
      <div className="w-100 header">
        {/*________________ Contact Info (TOP)_______________ */}

        <div className="cnt__info d-flex">
          <Row className="d-flex contact">
            <Col md={12} lg={6} sm={12} className="address d-flex ps-5">
              <div className="cnt__icon">
                <FaPhoneAlt style={{ fontSize: '14px' }} />
              </div>{' '}
              <span className="add_dit"> +001 2233 456</span>
            </Col>
            <Col md={12} lg={6} sm={12} className="address d-flex ps-3">
              <div className="cnt__icon">
                <FaEnvelope style={{ fontSize: '14px' }} />
              </div>{' '}
              <span className="add_dit"> contact@company.com</span>
            </Col>
          </Row>
          <div className="addvertisign ">
            <p className="add_dit">
              Summer sale discount off <span style={{ color: 'red' }}>50%</span>{' '}
              ! Shop Now
            </p>
          </div>
        </div>

        {/*_______________ Navbar_________________ */}
        <nav className={navbar ? 'navbar active' : 'navbar'}>
          <Link to="/">
            <div className="nav__logo ms-3">
              <img src="./image/Logo3.png" alt="logo" />
            </div>
          </Link>
          <div className="d-flex search">
            <input className="search__box" />
            <FaSearch className="search__icon" />
          </div>

          {/* Dropdown menu section */}

          <div className="d-flex">
            <div className="drop__container">
              <FaUser className="log__icon mx-3" />
              <div className="drop__content">
                {user.email ? (
                  <div className="profile" style={{ textAlign: 'center' }}>
                    <img className="dp" src={user.photoURL} alt="" />
                    <p style={{ color: 'white' }}>{user.displayName}</p>
                  </div>
                ) : (
                  <div className="profile" style={{ textAlign: 'center' }}>
                    <img className="dp" src="./image/dp.png" alt="" />
                    <p style={{ color: 'white' }}>Please Sign In</p>
                  </div>
                )}
                <div className="links">
                  <ul className="nav__list">
                    <li>
                      <Link to="/orders">Profile</Link>
                    </li>
                    <br />

                    <li>
                      {' '}
                      <Link to="/orders">Order Now</Link>
                    </li>
                    <br />
                    <li>
                      {!user.email ? (
                        <Link to="/login">Sign In</Link>
                      ) : (
                        <Button
                          className="outlet_btn"
                          variant="outline-info"
                          onClick={handleLogout}
                        >
                          Sign Out
                        </Button>
                      )}
                    </li>

                    <br />
                  </ul>
                </div>
              </div>
            </div>
            <Link to="/cart">
              <FaShoppingCart className="log__icon" />
            </Link>
            <p className="cart__lnt me-3"> 10</p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
