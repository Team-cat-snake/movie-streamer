import React from 'react';
import EachMovie from './EachMovie';

const SearchResult = ({searchResult, getMovieDetail}) => {
  let searchResultList = [];
  for(const movie of searchResult) {
    searchResultList.push(
      <EachMovie key={searchResult.indexOf(movie)} id={movie.id} title={movie.title} release_date={movie.release_date} poster={movie.poster} rating={movie.rating} rate_count={movie.rate_count} getMovieDetail={getMovieDetail} />
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