import React from 'react'
import './ChatBox.scss';
import SamIconLarge from '../../assets/sam-icon-large.png';
import ChatIcon from '../../assets/chat-icon.png';

import BotMessage from '../BotMessage/BotMessage';
import UserMessage from '../UserMessage/UserMessage';


export default function ChatBox() {
    return (
        <main className="chatbox">

        <section className="chatbox__heading">
            <img className="chatbox__header-icon" src={ChatIcon} alt=""/>
            <h1>Conversation with Sam</h1>
            <img className="chatbox__logo-right"src={SamIconLarge} alt=""/>
        </section>

        <section className="chatbox__messages">

            <BotMessage content="Hi Katie! I am Sam! I am here to make your online shopping easier!
                How can I help you?" />

            <UserMessage content='Hey Sam! I want to order groceries' />

            <BotMessage content='Sounds great! Would you prefer to order for pick up or delivery?' />
            
        </section>

            <section className="chatbox__select">
                <button className="chatbox__button">Pick up</button>
                <button className="chatbox__button">Delivery</button>
            </section>
            <form className="chatbox__bottom">
                <textarea className="chatbox__textarea" placeholder="Write a message..."></textarea>
                <button className="chatbox__send">Send</button>
            </form>
        </main>
    )
}
