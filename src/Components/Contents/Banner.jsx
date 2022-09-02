import React from 'react';
import '../Stylings/Banner.css';
const Banner = () => {
  return (
    <div className="banner">
      <div className="l_Banner">
        <div className="bnr_delails" data-aos="zoom-out-down">
          <h5>Spring - Summer 2016</h5>
          <h1 className="mb-4">FLASH SALE OF 70%</h1>
          <span className="detali">
            Sure you wanna miss the chance of getting the latest and modern
            technology of your favourite brand with in cheep price? No, So hurry
            up!
          </span>{' '}
          <br />
          <div data-aos="fade-up-right">
            <button className="button_exs my-4 ">Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
