import React from 'react';
import Tvshowspage from '../Images/Tvshowspage.jpeg'

function Tvshows  () {
  return (
    <div className="tvshows">
       <img src={Tvshowspage} alt="Tvshowpage" className="Tvshowpage" width={1550} height={600}/>
      <h1>TV Shows</h1>
      <p>Browse popular TV shows here.</p>
    </div>
  );
};

export default Tvshows;
