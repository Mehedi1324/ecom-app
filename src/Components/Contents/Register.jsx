import React from 'react';
import '../Stylings/Register.css';
import { Row, Col } from 'react-bootstrap';
const Register = () => {
  return (
    <div className="register">
      <div className="add__banner">
        <h2>Customer Register</h2>
      </div>

      <div className="second__container">
        <div>
          <button>Sign in with Facebook</button>
          <button>Sign in with Google</button>
          <button>Sign in with Twitter</button>
        </div>
      </div>
      <div className="info">
        {/* Personal Info */}
        <div className="personal__info">
          <h3>PERSONAL INFORMATION</h3>
          <Row className="name__input">
            <Col className="name__col" md={6} lg={6} sm={12}>
              <p>
                <input
                  className="name__inputBox"
                  type="text"
                  placeholder="First name"
                />{' '}
                <br />{' '}
                <span className="name_warn">* this is required field</span>
              </p>
            </Col>
            <Col className="name__col" md={6} lg={6} sm={12}>
              <p>
                <input
                  className="name__inputBox"
                  type="text"
                  placeholder="Second name"
                />{' '}
                <br />
                <span className="name_warn">* this is required field</span>
              </p>
            </Col>
          </Row>
        </div>

        {/* _____________ */}
        <div className="signin__info">
          <h3 className="mb-3">SIGN-IN INFORMATION</h3>
          <div className="signin__input">
            <p className="sinfo">
              <h4>
                Email <span style={{ color: 'red' }}>*</span> :
              </h4>
              <input type="email" />
              <br />
            </p>
            <p className="sinfo">
              <h4>
                Password <span style={{ color: 'red' }}>*</span>:
              </h4>
              <input type="password" />
              <br />
            </p>
            <p className="sinfo">
              <h4>
                Confirm Password <span style={{ color: 'red' }}>*</span>:
              </h4>
              <input type="password" />
              <br />
            </p>
            <p className="sinfo">
              <input
                type="checkbox"
                name="Check"
                style={{ padding: '20px' }}
                id=""
                className="me-2 check__box"
              />
              By using this form you agree with the storage and handling of your
              data by this website.
            </p>

            <br />
            <input type="submit" value="Create Account" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
