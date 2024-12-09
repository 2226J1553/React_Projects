import React from 'react'
import Moviepage from '../Images/MoviePage.png'

function Movies(){
  return (
    <div className="movies">
      <img src={Moviepage} alt="Moviepage" className="Moviepage" width={1550} height={600} />
      <h1>Movies</h1>
      <p>Browse popular movies here.</p>
    </div>
  );
};

export default Movies;
