import React, { Component } from 'react';
import Chat from '../Chat';
import './Home.css';

class Home extends Component {
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
      <div className="pt-3">
        <Chat/>
      </div>
    );
  }
}

export default Home;