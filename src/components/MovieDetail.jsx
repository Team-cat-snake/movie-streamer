import React from 'react';

const MovieDetail = ({ movieDetail }) => (
  <div className='movie-detail-container'>
    <img id='backdrop' src={movieDetail.backdrop} />
    <figure className='movie-detail'>
      <img src={movieDetail.poster} />
      <figCaption className='details'>
        <h1>{`Title: ${movieDetail.title}`}</h1>
        <div className='info'>
          <label>Run Time: </label>
          <span>{`${movieDetail.runtime} minutes`}</span>
        </div>
        <div className='info'>
          <label>tagline: </label>
          <span>{`"${movieDetail.tagline}"`}</span>
        </div>
        <div className='info'>
          <label>Release Date: </label>
          <span>{movieDetail.releaseDate}</span>
        </div>
        <div className='info'>
          <label>Rating: </label>
          <span>{`${movieDetail.rating} (${movieDetail.rateCount} rates)`}</span>
        </div>
        <div className='info'>
          <label>Budget: </label>
          <span>{movieDetail.budget}</span>
        </div>
        <div className='info'>
          <label>Overview: </label>
          <p>{movieDetail.overview}</p>
        </div>
      </figCaption>
    </figure>
  </div>
)

export default MovieDetail;