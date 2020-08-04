import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  componentDidMount(){
    console.log(process.env.REACT_APP_BASE_API_URL);
  }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <h1>Login Page</h1>
      </div>
    );
  }
}

export default Login;