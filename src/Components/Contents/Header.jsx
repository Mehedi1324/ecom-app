import React from 'react';
import '../Stylings/Header.css';
import { Row, Col, Button, Offcanvas } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaMinus,
  FaPhoneAlt,
  FaPlus,
  FaSearch,
  FaShoppingCart,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Share_Comp/Hooks/AuthProvider';
import { MdDelete } from 'react-icons/md';

const Header = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const ecomCartItems = cartState.ecomCartItems;
  // Framer Motion__
  const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.1,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  };

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
  // Mini card function_______
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="nav__bar">
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
            <motion.div
              className="menu-item"
              onHoverStart={toggleHoverMenu}
              onHoverEnd={toggleHoverMenu}
            >
              <FaUser className="log__icon mx-3" />
              <motion.div
                className="sub-menu"
                initial="exit"
                animate={isHover ? 'enter' : 'exit'}
                variants={subMenuAnimate}
              >
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
                        <a href="/contact">Contact Us</a>
                      </li>
                      <br />

                      <li>
                        {' '}
                        <a href="/orders">Order Now</a>
                      </li>
                      <br />
                      <li>
                        {!user.email ? (
                          <a href="/login">
                            Sign In <FaSignInAlt />
                          </a>
                        ) : (
                          <Button
                            className="outlet_btn"
                            variant="outline-info"
                            onClick={handleLogout}
                          >
                            Sign Out <FaSignOutAlt />
                          </Button>
                        )}
                      </li>

                      <br />
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <Link to="/cart">
              <FaShoppingCart className="log__icon" />
            </Link>

            <p className="cart__lnt me-3"> {ecomCartItems.length} </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
