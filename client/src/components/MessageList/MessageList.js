import React, {Component} from 'react'
import BotMessage from '../BotMessage/BotMessage';
import UserMessage from '../UserMessage/UserMessage';
import {v4 as uuid} from 'uuid';

export default class MessageList extends Component {
    constructor(props){
        super(props);
        this.state= {
            messages: []
        }
    }
    componentDidMount(){
        this.setState({messages: this.props.messages})
    }


    componentDidUpdate(){
        if(this.state.messages !== this.props.messages){
            console.log('Hello');
            this.setState({
                messages: this.props.messages
            })
        }
    }

    render(){
    return (
        <>
        <section className="chatbox__messages">

            {this.state.messages ? (this.state.messages.map((message) => {
                    return (
                        message.isBot ?
                        <BotMessage key={uuid()} content={message.message} />
                        :
                        <UserMessage key={uuid()} content={message.message} />
                    )
                })
            ) : null }

        </section>
        <section className="chatbox__select">
                <button className="chatbox__button">Pick up</button>
                <button className="chatbox__button">Delivery</button>
            </section>
        </>
    )
    }
}



// {
//     "isBot": false,
//     "message": "Hey Sam! I want to order groceries"
// },
// {
//     "isBot": true,
//     "message": "Sounds great! Would you prefer to order for pick up or delivery?"
// },
// {
//     "isBot": false,
//     "message": "Delivery"
// },
// {
//     "isBot": true,
//     "message": "Is this the correct address, 438 Seymour street, Vancouver, BC?"
// },
// {
//     "isBot": false,
//     "message": "Confirm"
// },
// {
//     "isBot": true,
//     "message": "When would you like this delivery, Katie?"
// },
// {
//     "isBot": false,
//     "message": "Tomorrow, 8:00am! "
// },
// {
//     "isBot": true,
//     "message": "You got it, Saturday, the 27th at 8:00 am!"
// },
// {
//     "isBot": true,
//     "message": "What would you like to order?"
// },
// {
//     "isBot": false,
//     "message": "Apples"
// },
// {
//     "isBot": true,
//     "message": "When would you like anything else?"
// },
// {
//     "isBot": false,
//     "message": "No, just this, thanks."
// },
// {
//     "isBot": true,
//     "message": "Sounds good! Your groceries will be delivered on Saturday, the 27th at 8:00am!"
// },
