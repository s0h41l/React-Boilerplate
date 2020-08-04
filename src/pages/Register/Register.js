import React, { Component } from 'react';
import './Register.css';
import InputField from '../../component/InputField';
import Button from '../../component/Button';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      password:''
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
    const url = process.env.REACT_APP_BASE_API_URL+'/user/register';
    const user = {
      name:this.state.name,
      email:this.state.email,
      password:this.state.password
    }

    const response =  await fetch(url,{
      method:'POST',
      headers:{
        "Access-Control-Allow-Origin":"*"
      },
      body:{
        name:'sohail',
        email:'sohail@kmail.conm',
        password:'dsfhdjksfhdjdfshjsdfhjkhsfd'

      }
    })
    console.log(response);
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