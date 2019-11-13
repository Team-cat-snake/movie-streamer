import React from 'react';

const EachMovie = ({ id, title, release_date, poster, rating, rate_count, getMovieDetail, deleteFavorites, deleteToWatch }) => {
  return (
    <div className='eachMovie'>
      <img src={poster} onClick={()=>getMovieDetail(event, id)}/>
      <h3>{`${title} (${release_date.slice(0, 4)})`}</h3>
      {/* {deleteFavorites && 
       <button className='delete' onClick={deleteFavorites}>X</button>
      }
      {deleteToWatch && 
       <button className='delete' onClick={deleteToWatch}>X</button>
      } */}
      <p>{rating} ({rate_count})</p>
    </div>
  )
}

export default EachMovie;