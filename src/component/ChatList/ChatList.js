import React, { Component } from 'react';
import './ChatList.css';
import ChatMessage from '../ChatMessage';
// import {ChatContext} from '../../contexts/ChatContxt';
import {ChatContext} from '../../contexts/ChatContext';
// import { ChatContext } from '../ChatList/ChatList';

class ChatList extends Component {
  static contextType = ChatContext;
  constructor(props){
    super(props);
    this.state = {
      message: ""
    };
  }

  sendMessage = ()=>{
    const {message} = this.state;
    const {sendMessage} = this.context;
    sendMessage(message);
    this.setState({
      message: ""
    });
  }

  viewAllMessages(){
    return this.context.message.map(message=>{
      return <ChatMessage 
                name={message.name} 
                message={message.message}
                style={{
                    color:`white`, 
                    backgroundColor:`${message.color}`
                  }}
                received={true} 
                key={Math.random()} 
              /> 
    })
  }

  componentDidMount(){
    this.context.joinChat();
    this.scrollToBottom();
  }

  componentDidUpdate(){
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentWillUnmount(){
    this.context.leaveChat();
  }

  render() {
    const { message } = this.state;
    return (
    <>
    <div className="mx-1 card">
      <div>
          <div className="card-header bg-header">
            <span className="display-8">Test Room</span>
          </div>
          <div className="list pt-2">
            {this.viewAllMessages()}
            <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex sticky-bottom">
            <input value={message} onChange={event => this.setState({message : event.target.value})} onKeyUp={event => {
              if(event.key === 'Enter'){
                this.sendMessage();
              }
            }} type="text" className="form-control"/>
            <i className="fa fa-send send pl-3" onClick={this.sendMessage}></i>
      </div>
    </div>
    </>
    );
  }
}

export default ChatList;