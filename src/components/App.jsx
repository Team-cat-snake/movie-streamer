import React, { Component } from 'react';
import axios from 'axios';
import NowPlaying from './NowPlaying';
import MovieDetail from './MovieDetail';
import SearchResult from './SearchResult';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nowPlaying: [],
      searchResult:[],
      movieDetail: {},
    }

    this.getNowPlaying = this.getNowPlaying.bind(this);
    this.getSearchResult = this.getSearchResult.bind(this);
    this.getMovieDetail = this.getMovieDetail.bind(this);
  }

  componentDidMount() {
    this.getNowPlaying();
  }

  getNowPlaying() {  
    axios
      .get('/movie')
      .then(res => {
        const { nowPlaying } = res.data;
        this.setState({nowPlaying})
      })
      .catch(err => {
        console.error(err);
      });
  }

  getSearchResult(event) {  
    event.preventDefault();
    const searched = event.target.searched.value;
    axios
      .get(`/movie/search/${searched}`)
      .then(res => {
        const { searchResult } = res.data;
        this.setState({searchResult})
      })
      .catch(err => {
        console.error(err);
      });
  }

  getMovieDetail(event, id) {
    event.preventDefault();
    axios
      .get(`movie/details/${id}`)
      .then(res => {
        const { movieDetail } = res.data;
        this.setState({movieDetail});
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className='app'>
        <h2>Movie On</h2>
        <form onSubmit={this.getSearchResult}>
          <input type='text' name='searched' placeholder='Find Movies' />
          <button type='submit'>Search</button>
        </form>
        <SearchResult searchResult={this.state.searchResult} getMovieDetail={this.getMovieDetail} />
        <NowPlaying nowPlaying={this.state.nowPlaying} getMovieDetail={this.getMovieDetail}/>
        <MovieDetail movieDetail={this.state.movieDetail} />
      </div>
    )
  }
}

export default App;