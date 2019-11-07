import React from 'react';
const Favorites = ({favorites}) => {
  let favoritesList = [];
  for(const movie of favorites) {
    favoritesList.push(
      <EachMovie key={nowPlaying.indexOf(movie)} id={movie.id} title={movie.title} releaseDate={movie.releaseDate} poster={movie.poster} rating={movie.rating} rateCount={movie.rateCount} getMovieDetail={getMovieDetail} />
    )
  }
  return(
    <div className='watch-favorites-container'>
      <h2>Favorites</h2>
      <div className='watch-favorites-list'>
        {favoritesList}
      </div>
    </div>
  )
}
export default Favorites;

