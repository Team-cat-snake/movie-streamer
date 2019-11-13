import React from 'react';

const MovieDetail = ({ movieDetail, addFavorites, addToWatch }) => (
  <div className='movie-detail-container'>
    <div className='detail-container'>
      <img id='backdrop' src={movieDetail.backdrop} />
      <figure className='movie-detail'>
        <a href={movieDetail.homepage ? movieDetail.homepage : "#"} target='_blank'><img src={movieDetail.poster} /></a>
        <figcaption className='details'>
          <div className='button-group'>
            <button id='fav-btn' onClick={()=>addFavorites(movieDetail)}><i className="fas fa-heart"></i></button>
            <button id='to-watch-btn' onClick={()=>addToWatch(movieDetail)}><i className="fas fa-star"></i></button>
          </div>
          <h1>{`Title: ${movieDetail.title}`}</h1>
          <p className="tagline">{movieDetail.tagline}</p>
          <div className='info'>
            <label>Run Time: </label>
            <span>{`${movieDetail.runtime} minutes`}</span>
          </div>
          <div className='info'>
            <label>Release Date: </label>
            <span>{movieDetail.release_date}</span>
          </div>
          <div className='info'>
            <label>Rating: </label>
            <span>{`${movieDetail.rating} (${movieDetail.rate_count} rates)`}</span>
          </div>
          <div className='info'>
            <label>Budget: </label>
            <span>{movieDetail.budget}</span>
          </div>
          <div className='overview-container'>
            <label>Overview: </label>
            <p>{movieDetail.overview}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  </div>
)

export default MovieDetail;