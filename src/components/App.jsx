import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Nav from './Nav';
import Login from './Login';
import Signup from './Signup';
import SearchForm from './SearchForm';
import NowPlaying from './NowPlaying';
import SearchResult from './SearchResult';
import MovieDetail from './MovieDetail';
import Favorites from './Favorites';
import ToWatch from './ToWatch';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nowPlaying: [],
      searchResult:[],
      movieDetail: {},
      verified: false,
      condition: 'home',
      currentUser: '',
      favorites: [],
      toWatch: []
    }

    this.reset = this.reset.bind(this);
    this.getNowPlaying = this.getNowPlaying.bind(this);
    this.getSearchResult = this.getSearchResult.bind(this);
    this.getMovieDetail = this.getMovieDetail.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
    this.logOut = this.logOut.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
    this.addFavorites = this.addFavorites.bind(this);
    this.deleteFavorites = this.deleteFavorites.bind(this);
    this.getToWatch = this.getToWatch.bind(this);
    this.addToWatch = this.addToWatch.bind(this);
    this.deleteToWatch = this.deleteToWatch.bind(this);
  }

  reset() {
    this.setState({
      owPlaying: [],
      searchResult:[],
      movieDetail: {},
      condition: 'home',
    })
  }

  submitLogin(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    axios
      .post('/login', {user: username, pass: password})
      .then(res => {
        if(res.data.verified) {
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
        if(res.data.verified) {
          this.setState({
            verified: true,
            currentUser: username
          });
        }
      })
  }

  logOut() {
    axios
      .post('/logout', {user: this.state.currentUser})
      .then(res => {
        if(res.data.logOut) {
          this.setState({
            verified: false,
            currentUser: '',
            favorites: [],
            toWatch: []
          })
        }
      })
  }

  getFavorites() {
    axios
      .post('/favs', {
        user_name: this.state.currentUser
      })
      .then(res => {
        this.setState({favorites: res.data, condition: 'home'})
      })
  }

  addFavorites(movie) {
    axios
      .post('/favs/add', {
        id: movie.id,
        title: movie.title,
        poster: movie.poster,
        rating: movie.rating,
        rate_count: movie.rate_count,
        release_date: movie.release_date,
        user_name: this.state.currentUser
      })
      .then(res => {
        let favCopy = this.state.favorites.slice();
        this.setState({favorites: favCopy})
      })
  }

  deleteFavorites(movie) {
    axios
      .delete('/favs', {
        id: movie.id,
        user_name: this.state.currentUser
      })
      .then(res => {
        let filtered = this.state.favorites.filter((obj) => obj != movie)
        this.setState({favorites: filtered})
      })
  }

  getToWatch() {
    axios
      .post('/toWatch', {user_name: this.state.currentUser, condition: 'home'})
      .then(res => {
        this.setState({toWatch: res.data})
      })
  }

  addToWatch(movie) {
    axios
      .post('/toWatch/add', {
        id: movie.id,
        title: movie.title,
        poster: movie.poster,
        rating: movie.rating,
        rate_count: movie.rate_count,
        release_date: movie.release_date,
        user_name: this.state.currentUser
      })
      .then(res => {
        let watchCopy = this.state.toWatch.slice();
        this.setState({toWatch: watchCopy})
      })
  }

  deleteToWatch(movie) {
    axios
      .delete('/toWatch', {
        id: movie.id,
        user_name: this.state.currentUser
      })
      .then(res => {
        let filtered = this.state.toWatch.filter((obj) => obj != movie)
        this.setState({toWatch: filtered})
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
    console.log(id);
    axios
      .get(`movie/details/${id}`)
      .then(res => {
        const { movieDetail } = res.data;
        // console.log(movieDetail.re);
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
    axios
      .get('/movie')
      .then(result => {
        axios
          .get('/loggedIn')
          .then(res => {
            if(res.data.verified) {
              const {nowPlaying} = result.data
              this.setState({
                nowPlaying,
                condition: 'home',
                verified: true, 
                currentUser: res.data.cookie.userid
              });
            }
          })
          .catch(err => {
            console.error(err);
          });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <Router>
        <Nav 
          verified={this.state.verified}
          logOut={this.logOut}
          user={this.state.currentUser}
          getFavorites={this.getFavorites}
          getToWatch={this.getToWatch}
          reset={this.reset}
        />
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
                addFavorites={this.addFavorites}
                addToWatch={this.addToWatch}
              />
            }
          </Route>
          <Route path="/login">
            {this.state.verified ? <Redirect to="/" /> : 
              <Login 
                submitLogin={this.submitLogin}
              />
            }
          </Route>
          <Route path="/signup">
            {this.state.verified ? <Redirect to="/" /> : 
              <Signup 
                submitSignup={this.submitSignup}
              />
            }
          </Route>
          <Route path="/favs">
            {this.state.condition === 'detail' ? <Redirect to="/" /> :
              <Favorites 
                favorites={this.state.favorites}
                getMovieDetail={this.getMovieDetail} 
                deleteFavorites={this.deleteFavorites}
              />
            }
          </Route>
          <Route path="/toWatch">
            {this.state.condition === 'detail' ? <Redirect to="/" /> :
              <ToWatch 
                toWatch={this.state.toWatch}
                getMovieDetail={this.getMovieDetail} 
                deleteToWatch={this.deleteToWatch}
              />
            }
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;