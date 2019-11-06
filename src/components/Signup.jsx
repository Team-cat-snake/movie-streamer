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

  handleSubmit(e){
    console.log(e.target);
  }
  render() {
    return (
      <div>
        <h1>
          Please Signup Below.
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
            placeholder="Password"
            type="password"
            value={this.state.pass}
            onChange={this.handleChange}
            name="pass"
          />

          <input type="submit" value="Submit"  onSubmit={this.handleSubmit} />
        </form>
      </div>
    )
  }
};
export default Signup;