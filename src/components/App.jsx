import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nowPlaying: [],
      verified: false,
    }

    this.getNowPlaying = this.getNowPlaying.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
  }

  submitLogin(e) {
    e.preventDefault();
    const user = e.target.username.value;
    const pass = e.target.password.value;
    axios
      .post('/login', {user: user, pass: pass})
      .then(res => {
        if(res.data === 'verified') this.setState({verified: true});
      })
  }

  submitSignup(e) {
    e.preventDefault();
    const user = e.target.username.value;
    const pass = e.target.password.value;
    axios
      .post('/signup', {user: user, pass: pass})
      .then(res => {
        if(res.data === 'user Created') this.setState({verified: true});
      })
  }

  getNowPlaying() {  
    axios
      .get('/movie')
      .then(res => {
        const { nowPlaying } = res.data;
        if(nowPlaying) this.setState({nowPlaying: nowPlaying});
      })
      .catch(err => {
        console.error(err);
      })
  }



  componentDidMount() {
    this.getNowPlaying();
    axios
      .get('/loggedIn')
      .then(res => {
        if(res.data.verified) this.setState({verified: true});
      })
  }

  render() {
    console.log('state verified', this.state.verified)
    return (
      <Router>
        <div>
          <Nav 
            submitLogin={this.submitLogin}
            submitSignup={this.submitSignup}
          />
        </div>
      </Router>
    )
  }
}

export default App;