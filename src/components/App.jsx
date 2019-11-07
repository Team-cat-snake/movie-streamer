import React, { Component } from 'react';
import axios from 'axios';
import NowPlaying from './NowPlaying';
import MovieDetail from './MovieDetail';
import SearchResult from './SearchResult';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nowPlaying: [],
      searchResult:[],
      movieDetail: {},
      verified: false,
      currentUser: ''
    }

    this.getNowPlaying = this.getNowPlaying.bind(this);
    this.getSearchResult = this.getSearchResult.bind(this);
    this.getMovieDetail = this.getMovieDetail.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
  }

  submitLogin(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    axios
      .post('/login', {user: username, pass: password})
      .then(res => {
        if(res.data.verified === 'verified') this.setState({verified: true, currentUser: res.data.user});
      })
  }

  submitSignup(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    axios
      .post('/signup', {user: username, pass: password})
      .then(res => {
        if(res.data.verified === 'verified') this.setState({verified: true, currentUser: res.data.user});
      })
  }

  getNowPlaying() {  
    axios
      .get('/movie')
      .then(res => {
        const { nowPlaying } = res.data;
        this.setState({nowPlaying});
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

  componentDidMount() {
    this.getNowPlaying();
    axios
      .get('/loggedIn')
      .then(res => {
        console.log('res.data: ', res.data)
        if(res.data.verified) this.setState({verified: true, currentUser: res.data.cookie.userid});
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    console.log('is user verified? ', this.state.verified);
    console.log('current user: ', this.state.currentUser);
    return (
      <div className='app'>
        <Router>
          <Nav 
            submitLogin={this.submitLogin}
            submitSignup={this.submitSignup}
          />
          <form onSubmit={this.getSearchResult}>
            <input type='text' name='searched' placeholder='Find Movies' />
            <button type='submit'>Search</button>
          </form>
          <SearchResult 
            searchResult={this.state.searchResult} 
            getMovieDetail={this.getMovieDetail} 
          />
          <NowPlaying 
            nowPlaying={this.state.nowPlaying} 
            getMovieDetail={this.getMovieDetail}
          />
          <MovieDetail 
            movieDetail={this.state.movieDetail} 
          />
        </Router>
      </div>
    )
  }
}

export default App;