import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav.jsx';
import Search from './Search.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nowPlaying: [],
      verified: false,
      userFields: 
        {
          username: '',
          password: ''
        }
    }

    this.getNowPlaying = this.getNowPlaying.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
  }

  submitLogin(e) {
    e.preventDefault();
    axios
      .post('/login', {user: this.state.userFields.username, pass: this.state.userFields.password})
      .then(res => {
        if(res.data === 'verified') this.setState({verified: true});
      })
  }

  submitSignup(e) {
    e.preventDefault();
    axios
      .post('/signup', {user: this.state.userFields.username, pass: this.state.userFields.password})
      .then(res => {
        if(res.data === 'user Created') this.setState({verified: true});
      })
  }

  clearInput() {
    this.setState({userFields: {
      username: '',
      password: ''
    }});
  }

  handleFieldChange(e) {
    e.preventDefault();
    const userFields = this.state.userFields;
    userFields[e.target.name] = e.target.value;
    this.setState({userFields});
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
            userFields={this.state.userFields}
            handleFieldChange={this.handleFieldChange} 
            clearInput={this.clearInput}
            submitLogin={this.submitLogin}
            submitSignup={this.submitSignup}
          />
        </div>
      </Router>
    )
  }
}

export default App;