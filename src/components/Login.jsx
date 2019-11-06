import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      pass: ''
    }
  }
  render() {
    return ( 
      <div>
        <form action="">
          <input 
            type="text"
            value={this.state.user}
            onChange={this.handleChange}
            name="user"
            />
            <input 
            type="password"
            value={this.state.pass}
            onChange={this.handleChange}
            name="pass"
            />
        </form>
      </div>
    )
  }
}


export default Login;