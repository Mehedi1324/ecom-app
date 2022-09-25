import React from 'react';
import Lottie from 'react-lottie';
import data from '../../successful.json';
const Success = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
  };
  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Success;
