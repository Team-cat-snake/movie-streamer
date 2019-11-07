import React from 'react';

export default function SearchForm (props) {
  return (
    <div className="search-form">
      <form onSubmit={props.getSearchResult}>
        <input type='text' name='searched' placeholder='Find Movies' className='input-field' />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}