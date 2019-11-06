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

  handleSubmit(e){
    console.log("e", e)
  }

  render() {
    return ( 
      <div>
      <h1>Please Login Below</h1>
        <form action="" className="login-form">
          
          <input 
            placeholder='Username'
            type="text"
            value={this.state.fields.user}
            onChange={this.handleChange}
            name="user"
            />
            
            <input 
            placeholder="Password"
            type="password"
            value={this.state.fields.pass}
            onChange={this.handleChange}
            name="pass"
            />

            <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
        </form>
      </div>
    )
  }
};
export default Login;