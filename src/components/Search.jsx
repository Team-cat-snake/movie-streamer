import React from 'react';


export default function Search (props) {
  return (
    <form className="search-form" onSubmit={props.getSearchResult}>
      <input type='text' name='searched' placeholder='Find Movies' className='input-field' />
      <button type='submit'>Search</button>
    </form>
  )
}