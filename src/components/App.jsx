import React, { Component } from 'react';
import axios from 'axios';
import NowPlaying from './NowPlaying';
import MovieDetail from './MovieDetail';
import SearchResult from './SearchResult';
import SearchForm from './SearchForm';
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
      condition: 'home'
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
            condition: 'home'
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
            condition: 'home'
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
        if(res.data.verified) this.setState({verified: true});
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    console.log(this.state.verified);
    return (
      <div className='app'>
        <Router>
          <Nav 
            userFields={this.state.userFields}
            handleFieldChange={this.handleFieldChange} 
            clearInput={this.clearInput}
            submitLogin={this.submitLogin}
            submitSignup={this.submitSignup}
          />
        </Router>
        <SearchForm getSearchResult={this.getSearchResult} /> 
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