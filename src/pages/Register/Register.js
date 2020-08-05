import React, { Component } from 'react';
import './Register.css';
import InputField from '../../component/InputField';
import Button from '../../component/Button';
import {registerUser} from '../../services/auth.api';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      password:'',
      error:'',
      success:''
    };
  }

  onChangeName(name){
    this.setState({
      name:name
    })
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

  async register(){

    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    const response = await registerUser(name, email, password);
    
    if(response.status == 200){
      this.setState({
        success: response.data.message,
        email:'',
        name:'',
        password:'',
        error:''
      })
    }else{
      this.setState({
        error:'Something went wrong',
        email:'',
        name:'',
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
            <p className="lead">Register</p>
          </div>
          <div className="card-body">
          <InputField 
                placeholder="Enter name"
                onChangeText={this.onChangeName.bind(this)}
                value={this.state.name} label="Name" 
                secure={false}/>
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
                onClick={this.register.bind(this)}
                text="Register"
                className="btn btn-info"
                />
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default Register;