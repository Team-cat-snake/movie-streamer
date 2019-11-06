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
    }

    this.getNowPlaying = this.getNowPlaying.bind(this);
  }

  componentDidMount() {
    this.getNowPlaying();
  }

  getNowPlaying() {  
    axios
      .get('/movie')
      .then(res => {
        const { nowPlaying } = res.data;
        console.log(nowPlaying)
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
         <Search />
        </div>
      </Router>
    )
  }
}

export default App;