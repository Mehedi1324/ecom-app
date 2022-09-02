import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Share_Comp/Hooks/AuthProvider';
import '../Stylings/Login.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
const Login = () => {
  const {
    handleSignIn,
    emailRef,
    passwordRef,
    handleResetPassword,
    error,
    handleFacebookSignIn,
    handleGoogleSignIn,
  } = useAuth();
  return (
    <div className="log__container my-5">
      <Row>
        <Col md={6} lg={6} sm={12} xs={12} data-aos="fade-right">
          <div className="signin__info">
            <h3 className="mb-3 pe-4">REGISTERED CUSTOMERS</h3>
            <div className="form">
              <form onSubmit={handleSignIn}>
                <div className="signin__input">
                  <span className="pe-4">
                    If you have an account, sign in with your email address.
                  </span>
                  <span className="sinfo mt-5">
                    <h4>
                      Email <span style={{ color: 'red' }}>*</span> :
                    </h4>
                    <input ref={emailRef} className="input" type="email" />
                    <br />
                  </span>
                  <span className="sinfo">
                    <h4>
                      Password <span style={{ color: 'red' }}>*</span>:
                    </h4>
                    <input
                      ref={passwordRef}
                      className="input"
                      type="password"
                    />
                    <br />
                  </span>
                  <div className="mt-3">
                    <span>
                      <input
                        className="login__btn"
                        type="submit"
                        value="Sign In"
                      />
                      <button
                        onClick={handleResetPassword}
                        className="forgot__btn"
                      >
                        Forgot password !
                      </button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div className="mb-4">
              <span style={{ color: 'red' }}>{error}</span>
            </div>
            {/*Social Authentication _____________ */}

            <div className="second__container social__auth">
              <Row>
                <Col md={12} lg={12} sm={12} className="btn__col">
                  <button
                    onClick={handleFacebookSignIn}
                    className="pop__btn bg-primary"
                  >
                    {' '}
                    <FacebookIcon className="fab__icon" /> Sign in with Facebook
                  </button>
                </Col>
                <Col md={12} lg={12} sm={12} className="btn__col">
                  <button
                    onClick={handleGoogleSignIn}
                    className="pop__btn bg-danger"
                  >
                    <GoogleIcon className="fab__icon" /> Sign in with Google
                  </button>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col
          md={6}
          lg={6}
          sm={12}
          xs={12}
          className="px-4"
          data-aos="fade-left"
        >
          <h3 className="mb-3">NEW CUSTOMERS</h3>
          <p>
            By creating an account with our store, you will be able to move
            through the checkout process faster, store multiple shipping
            addresses, view and track your orders in your account and more.
          </p>
          <br />
          <Link to="/register">
            <button className="login__btn btn2">Create an Account</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
