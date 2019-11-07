import React from 'react';

const MovieDetail = ({ movieDetail }) => (
  <div className='movie-detail'>
    <img src={movieDetail.backdrop} />
    <h4>Title:</h4>
    <p>{movieDetail.title}</p>
    <h4>Overview:</h4>
    <p>{movieDetail.overview}</p>
  </div>
)

export default MovieDetail;