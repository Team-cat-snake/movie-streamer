import React from 'react';

const MovieDetail = ({ movieDetail }) => (
  <div className='movie-detail'>
    <h1>{`${movieDetail.title}  (${movieDetail.releaseDate.slice(0, 4)})`}</h1>
    <img src={movieDetail.backdrop} />
    <h4>Overview:</h4>
    <p>{movieDetail.overview}</p>
  </div>
)

export default MovieDetail;