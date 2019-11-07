import React, { Component } from 'react';
import axios from 'axios';
import NowPlaying from './NowPlaying';
import MovieDetail from './MovieDetail';
import SearchResult from './SearchResult';
import Nav from './Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nowPlaying: [],
      searchResult:[],
      movieDetail: {},
      verified: false,
      condition: 'home',
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
        if(res.data === 'verified') {
          this.setState({
            verified: true,
            condition: 'home',
            currentUser: username
          });
        }
      })
  }

  submitSignup(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    axios
      .post('/signup', {user: username, pass: password})
      .then(res => {
        if(res.data === 'user Created') {
          this.setState({
            verified: true,
            condition: 'home',
            currentUser: username
          });
        }
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
        this.setState({
          searchResult,
          condition: 'search'
        })
      })
      .catch(err => {
        console.error(err);
      });
      event.target.searched.value = '';
  }

  getMovieDetail(event, id) {
    event.preventDefault();
    axios
      .get(`movie/details/${id}`)
      .then(res => {
        const { movieDetail } = res.data;
        this.setState({
          movieDetail,
          condition: 'detail'
        });
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
      <div>
        <Nav 
          submitLogin={this.submitLogin}
          submitSignup={this.submitSignup}
        />
        { this.state.condition === 'home' &&
          <NowPlaying 
            nowPlaying={this.state.nowPlaying} 
            getMovieDetail={this.getMovieDetail}
          /> 
        }
        { this.state.condition === 'search' &&
          <SearchResult 
            searchResult={this.state.searchResult} 
            getMovieDetail={this.getMovieDetail} 
          />
        }
        { this.state.condition === 'detail' &&
          <MovieDetail 
            movieDetail={this.state.movieDetail} 
          />
        }
      </div>
    )
  }
}

export default App;