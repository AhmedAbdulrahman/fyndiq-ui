import React from 'react'
import PropTypes from 'prop-types'

import MessagePortal from './message-portal'
import styles from '../message.css'

class MessageWrapper extends React.Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.element),
  }

  static defaultProps = {
    messages: [],
  }

  // Keep only one instance of MessageWrapper
  static instance = null

  static addMessage(message) {
    if (MessageWrapper.instance == null) {
      throw new Error('MessageWrapper has no instance running')
    }

    MessageWrapper.instance.addMessage(message)
  }

  constructor(props) {
    super(props)

    this.state = { messages: this.props.messages }

    this.addMessage = this.addMessage.bind(this)
  }

  componentWillMount() {
    if (MessageWrapper.instance != null) {
      console.warn('MessageWrapper already had an instance')
    }

    MessageWrapper.instance = this
  }

  componentWillUnmount() {
    MessageWrapper.instance = null
  }

  addMessage(message) {
    this.setState(state => ({
      messages: [...state.messages, message],
    }))
  }

  removeMessage(message) {
    this.setState(state => {
      const index = state.messages.indexOf(message)

      return {
        ...state,
        messages: [
          ...state.messages.slice(0, index),
          ...state.messages.slice(index + 1),
        ],
      }
    })
  }

  render() {
    return (
      <MessagePortal>
        <div className={styles.wrapper}>
          {this.state.messages.map((message, id) => (
            <div key={id}>
              {React.cloneElement(message, {
                onClose: () => this.removeMessage(message),
              })}
            </div>
          ))}
        </div>
      </MessagePortal>
    )
  }
}

export default MessageWrapper
