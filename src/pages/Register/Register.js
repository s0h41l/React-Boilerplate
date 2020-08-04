import React, { Component } from 'react';
import './Register.css';
import InputField from '../../component/InputField';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    };
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}


  onChangeEmail(email){
    this.setState({
      email:email
    })
  }

  onChangePassword(pass){
    this.setState({
      password:pass
    })
  }

  render() {
    return (
      <div className="register">
        <div className="card w-50">
          <div className="card-header pb-0">
            <p className="lead">Register</p>
          </div>
          <div className="card-body">
            <InputField placeholder="Enter Email" onChangeText={this.onChangeEmail.bind(this)} value={this.state.email} label="Email" secure={false}/>
            <InputField placeholder="Enter Password" onChangeText={this.onChangePassword.bind(this)} value={this.state.password} label="Password" secure={true}/>
          </div>
        </div>        
      </div>
    );
  }
}

export default Register;