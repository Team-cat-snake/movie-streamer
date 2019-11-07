import React from 'react';

const SearchForm = ({getSearchResult}) => (
  <form onSubmit={getSearchResult}>
    <input type='text' name='searched' placeholder='Find Movies' />
    <button type='submit'>Search</button>
  </form>
)

export default SearchForm;