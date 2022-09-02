import React from 'react';
import '../Stylings/Register.css';
import { Row, Col } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useAuth } from '../../Share_Comp/Hooks/AuthProvider';
const Register = () => {
  const {
    handleGoogleSignIn,
    handleFacebookSignIn,
    f_nameRef,
    l_nameRef,
    emailRef,
    passwordRef,
    repasswordRef,
    handleSignUp,
  } = useAuth();
  return (
    <div className="register">
      <div className="add__banner" data-aos="fade-down">
        <h2>Customer Register</h2>
      </div>

      <div className="second__container" data-aos="fade-down">
        <Row>
          <Col md={4} lg={4} sm={12} className="btn__col">
            <button
              onClick={handleFacebookSignIn}
              className="pop__btn bg-primary"
            >
              {' '}
              <FacebookIcon className="fab__icon" /> Sign in with Facebook
            </button>
          </Col>
          <Col md={4} lg={4} sm={12} className="btn__col">
            <button onClick={handleGoogleSignIn} className="pop__btn bg-danger">
              <GoogleIcon className="fab__icon" /> Sign in with Google
            </button>
          </Col>
        </Row>
      </div>
      <div className="info" data-aos="fade-down">
        {/* Personal Info */}
        <form onSubmit={handleSignUp}>
          <div className="personal__info mb-3">
            <h3>PERSONAL INFORMATION</h3>
            <Row className="name__input">
              <Col className="name__col" md={6} lg={6} sm={12}>
                <p>
                  <input
                    required
                    className="name__inputBox mt-3"
                    type="text"
                    placeholder="First name"
                    ref={f_nameRef}
                  />{' '}
                </p>
              </Col>
              <Col className="name__col" md={6} lg={6} sm={12}>
                <p>
                  <input
                    required
                    className="name__inputBox mt-3"
                    type="text"
                    placeholder="Second name"
                    ref={l_nameRef}
                  />{' '}
                </p>
              </Col>
            </Row>
          </div>

          {/* _____________ */}

          <div className="signin__info">
            <h3 className="mb-3">SIGN-IN INFORMATION</h3>
            <div className="signin__input">
              <span className="sinfo ">
                <h4>
                  Email <span style={{ color: 'red' }}>*</span> :
                </h4>
                <input required type="email" ref={emailRef} />
                <br />
              </span>
              <span className="sinfo">
                <h4>
                  Password <span style={{ color: 'red' }}>*</span>:
                </h4>
                <input required type="password" ref={passwordRef} />
                <br />
              </span>
              <span className="sinfo">
                <h4>
                  Confirm Password <span style={{ color: 'red' }}>*</span>:
                </h4>
                <input required type="password" ref={repasswordRef} />
                <br />
              </span>
              <p className="sinfo">
                <input
                  required
                  type="checkbox"
                  name="Check"
                  style={{ padding: '20px' }}
                  id=""
                  className="me-2 check__box"
                />
                By using this form you agree with the storage and handling of
                your data by this website.
              </p>

              <br />
              <input
                required
                type="submit"
                className="acc__btn"
                value="Create Account"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
