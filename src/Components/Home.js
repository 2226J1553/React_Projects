import React from 'react';
import Banner from '../Images/Banner.png';

function Home(){
  return (
    <div className="home">
      <img src={Banner} alt="Home Banner" className="home-banner" width={1550} height={580} />
      <h1>Welcome to Netflix Demo Page</h1>
      <p>Explore your favorite movies and TV shows!</p>
    </div>
  );
};

export default Home;
