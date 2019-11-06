import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: {
        user: '',
        pass: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    console.log(e.target.value);
    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({fields})
    console.log("news", this.state.fields)
  }

  render() {
    return ( 
      <div>
      <h1>Please Login Gangsta</h1>
        <form action="">
          
          <input 
            placeholder='User'
            type="text"
            value={this.state.fields.user}
            onChange={this.handleChange}
            name="user"
            />
            
            <input 
            placeholder="password"
            type="password"
            value={this.state.fields.pass}
            onChange={this.handleChange}
            name="pass"
            />
        </form>
      </div>
    )
  }
};
export default Login;