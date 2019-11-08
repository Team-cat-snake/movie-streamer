import React from 'react';
import EachMovie from './EachMovie';

const Favorites = ({ favorites, getMovieDetail, deleteFavorites }) => {
  let favoritesList = [];
  console.log(favorites);
  for(const movie of favorites) {
    favoritesList.push(
      <EachMovie key={favorites.indexOf(movie)} id={movie.id} title={movie.title} release_date={movie.release_date} poster={movie.poster} rating={movie.rating} rate_count={movie.rate_count} getMovieDetail={getMovieDetail} deleteFavorites={deleteFavorites}/>
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
