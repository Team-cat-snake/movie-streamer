import React from 'react';

const ToWatch = ({toWatch}) => {
  let toWatchList = [];
  for(const movie of toWatch) {
    toWatchList.push(
      <EachMovie key={nowPlaying.indexOf(movie)} id={movie.id} title={movie.title} releaseDate={movie.releaseDate} poster={movie.poster} rating={movie.rating} rateCount={movie.rateCount} getMovieDetail={getMovieDetail} />
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