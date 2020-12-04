import React, { Component } from 'react';
import './ChatBox.scss';
import SamIconLarge from '../../assets/sam-icon-large.png';
import ChatIcon from '../../assets/chat-icon.png';
import axios from 'axios';

import MessageList from '../MessageList/MessageList';
import ItemList from '../ItemImages/ItemList';

export default class ChatBox extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
          isBot: true,
          message:
            'Hi Katie! I am Sam! I am here to make your online shopping easier! How can I help you?',
        },
      ],
      update: '',
      itemList: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.botResponse = this.botResponse.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.update !== '') {
      this.setState((prevState) => ({
        messages: [
          ...prevState.messages,
          { isBot: false, message: prevState.update },
        ],
        update: '',
      }));
      this.botResponse();
    }
  }
  handleChange(e) {
    this.setState({ update: e.target.value });
  }

  getItemListByType = (type) => {
    axios.get(`http://localhost:8080/inventory`)
    .then((result) => {
      const filteredResult = result.data.filter((item) => item.type.toLowerCase() === type);
      console.log(filteredResult);
      this.setState({
        itemList: filteredResult,
      });
      console.log(this.state);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  botResponse = () => {
    if (this.state.update.toLowerCase().includes('groceries')) {
      this.setState(
        this.setState((prevState) => ({
          messages: [
            ...prevState.messages,
            {
              isBot: true,
              message:
                'Sounds great! Would you prefer to order for pick up or delivery?',
            },
          ],
          update: '',
        }))
      );
    } else if (this.state.update.toLowerCase().includes('delivery')) {
      this.setState(
        this.setState((prevState) => ({
          messages: [
            ...prevState.messages,
            {
              isBot: true,
              message:
                'Is this the correct address, 438 Seymour street, Vancouver, BC?',
            },
          ],
          update: '',
        }))
      );
    } else if (this.state.update.toLowerCase().includes('confirm')) {
      this.setState(
        this.setState((prevState) => ({
          messages: [
            ...prevState.messages,
            {
              isBot: true,
              message: 'When would you like this delivery, Katie?',
            },
          ],
          update: '',
        }))
      );
    } else if (this.state.update.toLowerCase().includes('tomorrow')) {
      this.setState(
        this.setState((prevState) => ({
          messages: [
            ...prevState.messages,
            {
              isBot: true,
              message: 'You got it, Saturday, the 27th at 8:00 am!',
            },
            {
                isBot: true,
                message: 'What would you like to order?'
            }
          ],
          update: '',
        }))
      );
    } else if (this.state.update.toLowerCase().includes('apple')) {
        let itemImages = [<ItemList />];
        this.setState(
          this.setState((prevState) => ({
            messages: [
              ...prevState.messages,
              {
                isBot: true,
                message: itemImages,
              },
            ],
            update: '',
          }))
        );
      } else if (this.state.update.toLowerCase().includes('honeycrisp')) {
        this.setState(
          this.setState((prevState) => ({
            messages: [
              ...prevState.messages,
              {
                isBot: true,
                message: 'Would you like anything else?'
              },
            ],
            update: '',
          }))
        );
      } else if (this.state.update.toLowerCase().includes('just this')) {
        this.setState(
          this.setState((prevState) => ({
            messages: [
              ...prevState.messages,
              {
                isBot: true,
                message: "Sounds good! Your groceries will be delivered on Saturday, the 27th at 8:00am!"
              },
            ],
            update: '',
          }))
        );
      }
  };

  render() {
    return (
      <main className='chatbox'>
        <section className='chatbox__heading'>
          <img className='chatbox__header-icon' src={ChatIcon} alt='' />
          <h1>Conversation with Sam</h1>
          <img className='chatbox__logo-right' src={SamIconLarge} alt='' />
        </section>

        <MessageList messages={this.state.messages} />

        <form
          onSubmit={this.handleSubmit}
          id='form'
          className='chatbox__bottom'>
          <input
            onChange={this.handleChange}
            value={this.state.update}
            className='chatbox__textarea'
            placeholder='Write a message...'></input>
          <button type='submit' className='chatbox__send'>
            Send
          </button>
        </form>
      </main>
    );
  }
}