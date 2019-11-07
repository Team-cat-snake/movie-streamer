import React from 'react';

const EachMovie = ({ id, title, poster, rating, rateCount, getMovieDetail }) => (
  <div className='eachMovie'>
    <img src={poster} onClick={()=>getMovieDetail(event, id)}/>
    <h3>{title}</h3>
    <p>{rating} ({rateCount})</p>
  </div>
)

export default EachMovie;