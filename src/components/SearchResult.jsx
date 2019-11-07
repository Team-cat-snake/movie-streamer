import React from 'react';
import EachMovie from './EachMovie';

const SearchResult = ({searchResult, getMovieDetail}) => {
  let searchResultList = [];
  for(const movie of searchResult) {
    searchResultList.push(
      <EachMovie key={searchResult.indexOf(movie)} id={movie.id} title={movie.title} poster={movie.poster} rating={movie.rating} rateCount={movie.rateCount} getMovieDetail={getMovieDetail} />
    )
  }

  return(
    <div className='search-result-container'>
      <h2>Search Result</h2>
      <div className='search-list'>
        {searchResultList}
      </div>
    </div>
  )
}

export default SearchResult;