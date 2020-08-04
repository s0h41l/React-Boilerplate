import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <button onClick={()=>this.props.onClick()} className={this.props.className} style={this.props.style}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;