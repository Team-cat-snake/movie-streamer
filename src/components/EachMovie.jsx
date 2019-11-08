import React from 'react';

const EachMovie = ({ id, title, releaseDate, poster, rating, rateCount, getMovieDetail }) => (
  <div className='eachMovie'>
    <img src={poster} onClick={()=>getMovieDetail(event, id)}/>
    <h3>{`${title} (${releaseDate.slice(0, 4)})`}</h3>
    <p>{rating} ({rateCount})</p>
  </div>
)

export default EachMovie;