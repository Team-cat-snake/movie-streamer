import React, { Component } from 'react';
import axios from 'axios';


 class Search extends Component {
   constructor(props) {
     super(props);  
     this.state = {
       searchResult: [],
     }
   }

   getSearchResult(event) {
     event.preventDefault();
     const searched = event.target.searched.value;
     axios
       .get(`/movie/search/${searched}`)
       .then(res => {
         console.log(res.data);
       })
       .catch(err => {
         console.error(err);
       })
   }
  
render() {
  return (
    <div className='app'>

      <form onSubmit={this.getSearchResult}>
        <input type='text' name='searched' placeholder='Find Movies' />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}
}
export default Search;