import React from 'react';
import EachMovie from './EachMovie';

const NowPlaying = ({ nowPlaying, getMovieDetail }) => {
  let newMovieList = [];
  for(const movie of nowPlaying) {
    newMovieList.push(
      <EachMovie key={nowPlaying.indexOf(movie)} id={movie.id} title={movie.title} release_date={movie.release_date} poster={movie.poster} rating={movie.rating} rate_count={movie.rate_count} getMovieDetail={getMovieDetail} />
    )
  }

  return(
    <div className='now-playing-container'>
      <h2>Now Playing</h2>
      <div className='now-playing-list'>
        {newMovieList}
      </div>
    </div>
  )
}

export default NowPlaying