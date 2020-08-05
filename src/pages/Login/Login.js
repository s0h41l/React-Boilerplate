import React, { Component } from 'react';
import './Login.css';
import InputField from '../../component/InputField';
import Button from '../../component/Button';
import {loginUser} from '../../services/auth.api';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      error:'',
      success:''
    };
  }

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

  async login(){

    const email = this.state.email;
    const password = this.state.password;
    const response = await loginUser(email, password);
    console.log(response);
    
    if(response.status == 200){
      this.setState({
        success: response.data.message,
        email:'',
        password:'',
        error:''
      })
    }else{
      this.setState({
        error:'Something went wrong',
        email:'',
        password:'',
        success:''
      })
    }

  }

  render() {
    return (
      <div className="register">
        <div className="card w-50">
          <div className="card-header pb-0">
            <p className="lead">Login</p>
          </div>
          <div className="card-body">
            <InputField 
                placeholder="Enter Email"
                onChangeText={this.onChangeEmail.bind(this)}
                value={this.state.email} label="Email" 
                secure={false}/>
            <InputField 
              placeholder="Enter Password" 
              onChangeText={this.onChangePassword.bind(this)} 
              value={this.state.password} 
              label="Password" 
              secure={true}/>

            {this.state.success &&  <div className="alert alert-success" role="alert">{this.state.success}</div>}
            {this.state.error &&  <div className="alert alert-danger" role="alert">{this.state.error}</div>}

            <div>
              <Button 
                onClick={this.login.bind(this)}
                text="Login"
                className="btn btn-info"
                />
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default Login;