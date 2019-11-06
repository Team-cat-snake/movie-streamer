import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nowPlaying: [],
      searchResult:[],
    }

    this.getNowPlaying = this.getNowPlaying.bind();
  }

  componentDidMount() {
    this.getNowPlaying();
  }

  getNowPlaying() {  
    axios
      .get('/movie')
      .then(res => {
        const { nowPlaying } = res.data;
      })
      .catch(err => {
        console.error(err);
      })
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
        <h2>Movie On</h2>
        <form onSubmit={this.getSearchResult}>
          <input type='text' name='searched' placeholder='Find Movies' />
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}

export default App;