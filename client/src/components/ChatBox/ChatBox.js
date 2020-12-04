import React, {Component} from 'react'
import './ChatBox.scss';
import SamIconLarge from '../../assets/sam-icon-large.png';
import ChatIcon from '../../assets/chat-icon.png';

import MessageList from '../MessageList/MessageList';


export default class ChatBox extends Component {
    constructor(){
        super();
        this.state= {
            messages: [{
                "isBot": true,
                "message": "Hi Katie! I am Sam! I am here to make your online shopping easier! How can I help you?",
            },
        ],
        update: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState(prevState => ({
            messages: [...prevState.messages, {isBot: false, message: prevState.update} ],
            update: '',
        }))
    }

    
    handleChange(e){
        this.setState({update: e.target.value})
    }

   
    render(){
    return (
        <main className="chatbox">

        <section className="chatbox__heading">
            <img className="chatbox__header-icon" src={ChatIcon} alt=""/>
            <h1>Conversation with Sam</h1>
            <img className="chatbox__logo-right"src={SamIconLarge} alt=""/>
        </section>

        <MessageList messages={this.state.messages}/>

            <form onSubmit={this.handleSubmit} id='form' className="chatbox__bottom">
                <input onChange={this.handleChange} value={this.state.update} className="chatbox__textarea" placeholder="Write a message..."></input>
                <button type='submit' className="chatbox__send">Send</button>
            </form>
        </main>
    )
    }
}
