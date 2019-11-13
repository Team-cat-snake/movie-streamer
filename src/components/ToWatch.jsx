import React from 'react';
import EachMovie from './EachMovie';

const ToWatch = ({ toWatch, getMovieDetail, deleteToWatch }) => {
  let toWatchList = [];
  for(const movie of toWatch) {
    toWatchList.push(
      <EachMovie key={toWatch.indexOf(movie)} id={movie.id} title={movie.title} release_date={movie.release_date} poster={movie.poster} rating={movie.rating} rate_count={movie.rate_count} getMovieDetail={getMovieDetail} deleteToWatch={deleteToWatch} />
    )
  }

  return(
    <div className='watch-favorites-container'>
      <h2>To Watch List</h2>
      <div className='watch-favorites-list'>
        {toWatchList}
      </div>
    </div>
  )
}

export default ToWatch;