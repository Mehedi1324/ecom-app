import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import '../Stylings/Subscription.css';
const Subscription = () => {
  return (
    <div className="sub__container">
      <h2>NEWSLETER SIGN UP</h2>
      <p>
        Subscribe our newsletter to get latest new about our new product and
        promo campaign.
      </p>
      <InputGroup className="mb-3 w-50 m-auto sub">
        <FormControl placeholder="email address" />
        <Button variant="outline-secondary" className="button">
          Subscribe
        </Button>
      </InputGroup>
    </div>
  );
};

export default Subscription;
