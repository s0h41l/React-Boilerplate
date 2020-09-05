import React, {Component, createContext} from 'react';
import socketIOClient from "socket.io-client";

export const ChatContext = createContext();

export default class ChatContextProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: []
            ,
            socket: null
        }
    }

    joinChat = ()=>{
        this.setState({
            socket: socketIOClient('http://192.168.10.3:5000')
        },()=>{
            this.state.socket.emit('userJoined',{
                name:"Sohail Khan"
            })


            this.state.socket.on("toAll", (message) => {
                console.log(message);
                this.setState(prevState=>{
                    return { 
                        message : [
                            ...prevState.message,
                            {
                                ...message
                            
                            },
                        ]
                    }
                })
                console.log(message);
            })
        })

    }

    sendMessage=(message)=>{
        const _message = {
            message: message,
            color: '#626eef',
            name: "Sohail"
        };
        this.state.socket.emit('toAll', _message);
    }

    leaveChat=()=>{
        this.state.socket.emit('disconnect',()=>{
            this.setState({
                socket: null
            })
        })
    }

    render(){
        const {joinChat, sendMessage, leaveChat} = this;
        return(
            <ChatContext.Provider value={{...this.state, joinChat ,sendMessage, leaveChat}}>
                {this.props.children}
            </ChatContext.Provider>
        )
    }
}
