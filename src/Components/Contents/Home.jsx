import React from 'react';
import Banner from './Banner';
import Blog from './Blog';
import Categories from './Categories';
import LatestCollections from './LatestCollections';
import Supports from './Supports';
import TopSellings from './TopSellings';
import Trendings from './Trendings';

const Home = () => {
  return (
    <div>
      <Banner />
      <Supports />
      <Categories />
      <LatestCollections />
      <TopSellings />
      <Trendings />
      <Blog />
    </div>
  );
};

export default Home;
