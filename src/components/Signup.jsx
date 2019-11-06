import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        user: '',
        pass: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({fields})
    console.log("A", this.state.fields)
  }
  render() {
    return (
      <div>
        <h1>
          Please signup below.
        </h1>
        <form action="">
         
          <input
          placeholder="Username"
            type="text"
            value={this.state.user}
            onChange={this.handleChange}
            name="user"
          />
          
          <input
            placeholder="password"
            type="password"
            value={this.state.pass}
            onChange={this.handleChange}
            name="pass"
          />
        </form>
      </div>
    )
  }
};
export default Signup;