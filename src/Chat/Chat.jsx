import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import ChatHeader from '../ChatHeader/ChatHeader'
import ChatInput from '../ChatInput/ChatInput'

export default class Chat extends Component {
  static defaultProps = {
    width: 500,
    height: 500,
    contact: {},
    onSend: () => console.warn('传入onSend属性，用于接收输入框内容'),
  }

  render() {
    return (
      <div
        className={style.content}
        style={{ width: this.props.width, height: this.props.height }}>
        <ChatHeader data={this.props.contact} />
        <ChatInput onSend={this.props.onSend} />
      </div>
    )
  }
}