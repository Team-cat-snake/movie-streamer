import React from 'react';
import EachMovie from './EachMovie';

const NowPlaying = ({ nowPlaying, getMovieDetail }) => {
  let newMovieList = [];
  for(const movie of nowPlaying) {
    newMovieList.push(
      <EachMovie key={nowPlaying.indexOf(movie)} id={movie.id}title={movie.title} poster={movie.poster} rating={movie.rating} rateCount={movie.rateCount} getMovieDetail={getMovieDetail} />
    )
  }

  return(
    <div className='nowPlaying'>
      <h2>Now Playing</h2>
      <div className='movieList'>
        {newMovieList}
      </div>
    </div>
  )
}

export default NowPlaying