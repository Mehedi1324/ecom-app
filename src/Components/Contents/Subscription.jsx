import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import '../Stylings/Subscription.css';
const Subscription = () => {
  return (
    <div className="sub__container">
      <h2 data-aos="fade-down">NEWSLETER SIGN UP</h2>
      <p data-aos="fade-down" data-aos-delay="100">
        Subscribe our newsletter to get latest new about our new product and
        promo campaign.
      </p>
      <InputGroup
        className="mb-3 w-50 m-auto sub"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <FormControl placeholder="email address" />
        <Button variant="outline-secondary" className="button">
          Subscribe
        </Button>
      </InputGroup>
    </div>
  );
};

export default Subscription;
