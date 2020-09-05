import React, { Component } from 'react';
import './ChatMessage.css';

class ChatMessage extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    const {name, style, message, received} = this.props;
    return (
      <div className="card border-0 px-3 my-1">
        {!received && <div className="border card message py-1 pb-2 px-2" style={style}>
          <h6 className="mb-0">{name}</h6>
              {message}
          </div>
        }

        {received && <div className="border card message py-1 pb-2 px-2" style={style}>
        <h6 className="mb-0">{name}</h6>
            {message}
        </div>
        }
      </div>
    );
  }
}

export default ChatMessage;