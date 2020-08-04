import React, { Component } from 'react';
import './InputField.css';

class InputField extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <input 
          type={this.props.secure?'password':'text'}
          onChange={text=>this.props.onChangeText(text.target.value)} 
          className="form-control" 
          placeholder={this.props.placeholder} 
          value={this.props.value}
          style={this.props.style}
          />
      </div>
    );
  }
}

export default InputField;