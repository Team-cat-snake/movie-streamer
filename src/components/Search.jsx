import React from 'react';


export default function Search (props) {
  return (
    <div className="login">
      <h1>Search for a Movie</h1>
      <form className="search-form" onSubmit={props.getSearchResult}>
        <input type='text' name='searched' placeholder='Find Movies' className='input-field' />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}