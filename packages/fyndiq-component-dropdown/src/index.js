import React from 'react'
import PropTypes from 'prop-types'
import Button from 'fyndiq-component-button'
import { Arrow } from 'fyndiq-icons'

import styles from '../styles.css'

// Note on disabled rules: The component is accessible.
// It might not be built in the perfect way (feel free to redo it)
// but it is accessible. So we can disable the accessibility rules.
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// FIXME: This function has been duplicated from fyndiq-component-modal
// A better place for this type of function would be in something like fyndiq-utils
const isSameType = (element, component) =>
  React.isValidElement(element) &&
  (element.type === component ||
    (element.type && element.type.displayName === component.name) ||
    (element.type && element.type.name === component.name))

class Dropdown extends React.Component {
  static propTypes = {
    opened: PropTypes.bool,
    defaultOpened: PropTypes.bool,
    button: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
    size: PropTypes.string,
    position: PropTypes.oneOf(['bl', 'bc', 'br', 'tl', 'tc', 'tr']),
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
    margin: PropTypes.number,
    disabled: PropTypes.bool,
    hoverMode: PropTypes.bool,
    noPropagateClickEvent: PropTypes.bool,
    noArrow: PropTypes.bool,
    noWrapperStyle: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    opened: undefined,
    defaultOpened: false,
    hoverMode: false,
    noArrow: false,
    noWrapperStyle: false,
    size: undefined,
    className: '',
    wrapperClassName: '',
    disabled: false,
    position: 'bl',
    margin: 5,
    noPropagateClickEvent: false,
    onOpen: () => {},
    onClose: () => {},
  }

  constructor(props) {
    super(props)

    this.state = {
      left: 0,
      top: 0,
    }
    if (props.opened === undefined) {
      this.isControlled = false
      this.state = {
        ...this.state,
        opened: this.props.defaultOpened,
      }
    } else {
      this.isControlled = true
    }

    this.onButtonClick = this.onButtonClick.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.handleDocumentClick = this.handleDocumentClick.bind(this)
    this.handleKeypress = this.handleKeypress.bind(this)
    this.closeDropdown = this.closeDropdown.bind(this)
  }

  componentDidMount() {
    this.updateDropdownPosition()

    document.addEventListener('click', this.handleDocumentClick, true)
    document.addEventListener('touchend', this.handleDocumentClick, true)
    document.addEventListener('keypress', this.handleKeypress, true)
  }

  componentWillUnmount() {
    if (global.document && document.addEventListener) {
      document.removeEventListener('click', this.handleDocumentClick, true)
      document.removeEventListener('touchend', this.handleDocumentClick, true)
      document.removeEventListener('keypress', this.handleKeypress, true)
    }
  }

  onButtonClick() {
    if (this.props.disabled) return

    if (!this.props.hoverMode) {
      this.toggleDropdown()
    } else {
      this.openDropdown()
    }
  }

  onMouseOver() {
    if (this.props.disabled) return

    if (this.props.hoverMode) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => this.openDropdown(), 200)
    }
  }

  onMouseOut() {
    if (this.props.disabled) return

    if (this.props.hoverMode) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => this.closeDropdown(), 100)
    }
  }

  getChildren() {
    // If children prop is a function, pass the close handler
    // to it
    if (typeof this.props.children === 'function') {
      return this.props.children({
        onClose: this.closeDropdown,
      })
    }
    return this.props.children
  }

  updateDropdownPosition() {
    if (!this.buttonNode || !this.buttonNode.getBoundingClientRect) {
      return
    }

    const buttonSize = this.buttonNode.getBoundingClientRect()
    const { position, margin } = this.props
    let left = this.buttonNode.offsetLeft
    let top = this.buttonNode.offsetTop

    // If the dropdown is above the button
    if (position[0] === 't') {
      top -= margin
      // If the dropdown is under the button
    } else {
      top += buttonSize.height + margin
    }

    if (position[1] === 'r') {
      // If the dropdown is on the right
      left += buttonSize.width
    } else if (position[1] === 'c') {
      // If it is in the center
      left += buttonSize.width / 2
    }

    this.setState({ left, top })
  }

  openDropdown() {
    this.updateDropdownPosition()

    if (!this.isOpen()) {
      this.props.onOpen()
    }

    if (!this.isControlled) {
      this.setState({ opened: true })
    }
  }

  closeDropdown() {
    if (this.isOpen()) {
      this.props.onClose()
    }
    if (!this.isControlled) {
      this.setState({ opened: false })
    }
  }

  isOpen() {
    if (this.isControlled) {
      return this.props.opened
    }
    return this.state.opened
  }

  toggleDropdown() {
    this.updateDropdownPosition()
    if (this.isControlled) {
      if (this.props.opened) {
        this.props.onClose()
      } else {
        this.props.onOpen()
      }
    } else {
      this.setState(state => {
        if (state.opened) {
          this.props.onClose()
        } else {
          this.props.onOpen()
        }
        return { opened: !state.opened }
      })
    }
  }

  handleDocumentClick(event) {
    if (this.props.disabled) return

    if (this.wrapperNode && !this.wrapperNode.contains(event.target)) {
      this.closeDropdown()
    }
  }

  handleKeypress(event) {
    if (this.props.disabled) return

    // ESC key
    if (this.isOpen() && event.keyCode === 27) {
      this.closeDropdown()
      event.stopImmediatePropagation()
    }
  }

  renderButton() {
    const { button, noArrow, size, position, disabled } = this.props

    // Arrow orientation depends on the position of the dropdown
    const arrowOrientation = position[0] === 't' ? 'up' : 'down'

    if (typeof button === 'string') {
      return (
        <Button
          size={size}
          disabled={disabled}
          onClick={this.onButtonClick}
          buttonRef={e => {
            this.buttonNode = e
          }}
        >
          {button}
          {!noArrow && (
            <Arrow orientation={arrowOrientation} className={styles.arrow} />
          )}
        </Button>
      )
    } else if (isSameType(button, Button)) {
      return React.cloneElement(button, {
        onClick: this.onButtonClick,
        disabled,
        buttonRef: e => {
          this.buttonNode = e
        },
      })
    }

    return (
      <div
        ref={e => {
          this.buttonNode = e
        }}
        onClick={this.onButtonClick}
        role="button"
      >
        {button}
      </div>
    )
  }

  render() {
    const {
      position,
      className,
      wrapperClassName,
      noWrapperStyle,
      noPropagateClickEvent,
    } = this.props

    return (
      <div
        className={`${styles.wrapper} ${className}`}
        ref={e => {
          this.wrapperNode = e
        }}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onClick={e => noPropagateClickEvent && e.stopPropagation()}
        role="button"
      >
        {this.renderButton()}
        {this.isOpen() && (
          <div
            className={`
              ${styles.dropdownWrapper}
              ${!noWrapperStyle ? styles.dropdownDefault : ''}
              ${styles[`position-${position}`]}
              ${wrapperClassName}
            `}
            style={{
              left: this.state.left,
              top: this.state.top,
            }}
          >
            {this.getChildren()}
          </div>
        )}
      </div>
    )
  }
}

export default Dropdown
