import React from 'react'
import SamIcon from '../../assets/sam-chat.png';

export default function BotMessage(props) {
    return (
        <div>
            <section className="chatbox__message">
            <img src={SamIcon} alt="" className="chatbox__icon"/>
                <p className="chatbox__bot-message">{props.content}</p>
            </section>
        </div>
    )
}
