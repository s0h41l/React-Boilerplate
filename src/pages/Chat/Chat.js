import React, { Component,createContext } from 'react';
import './Chat.css';
// export const ChatContext = createContext();
import ChatList from '../../component/ChatList/ChatList';
import ChatProvider from '../../contexts/ChatContext';  

class Chat extends Component {

  render() {
    return (
        <ChatProvider>
          <ChatList/>
        </ChatProvider>
      
    );
  }
}

export default Chat;