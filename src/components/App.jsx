import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Login from './Login';
import Signup from './Signup';
import SearchForm from './SearchForm';
import NowPlaying from './NowPlaying';
import SearchResult from './SearchResult';
import MovieDetail from './MovieDetail';

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
        this.setState({
          nowPlaying,
          condition: 'home'
        });
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
        if(res.data.verified) {
          this.setState({
            verified: true, 
            currentUser: res.data.cookie.userid
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <SearchForm getSearchResult={this.getSearchResult}/>
            {
              this.state.condition === 'home' &&
              <NowPlaying 
                nowPlaying={this.state.nowPlaying} 
                getMovieDetail={this.getMovieDetail}
              /> 
            }
            {
              this.state.condition === 'search' &&
              <SearchResult 
                searchResult={this.state.searchResult} 
                getMovieDetail={this.getMovieDetail} 
              />
            }
            {
              this.state.condition === 'detail' &&
              <MovieDetail 
                movieDetail={this.state.movieDetail} 
              />
            }
          </Route>
          <Route path="/login">
            <Login 
              submitLogin={this.submitLogin}
            />
          </Route>
          <Route path="/signup">
            <Signup 
              submitSignup={this.submitSignup}
            />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;