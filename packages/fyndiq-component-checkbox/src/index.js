import React from 'react'
import PropTypes from 'prop-types'
import { Checkmark } from 'fyndiq-icons'
import colors from 'fyndiq-styles-colors'
import styles from '../styles.css'


class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: !!props.checked,
      id: Math.random(),
    }

    this.toggle = this.toggle.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.checked !== nextProps.checked) {
      this.setState({
        checked: nextProps.checked,
      })
    }
  }

  toggle(e) {
    this.setState({ checked: e.target.checked })
    this.props.onToggle(e.target.checked)
  }

  renderCheckmark() {
    // Return a checkmark when not in frame mode
    if (this.state.checked) {
      return (
        <Checkmark
          className={styles.checkmark}
          color={this.props.color}
        />
      )
    }

    return <div className={styles.checkmark} />
  }

  render() {
    const {
      children,
      disabled,
      className,
      frame,
    } = this.props

    return (
      <span
        className={`
          ${styles.wrapper}
          ${disabled && styles.wrapperDisabled}
        `}
      >
        <input
          id={this.state.id}
          type="checkbox"
          className={`
            ${styles.checkbox}
            ${frame && styles.checkboxFrame}
            ${className}
          `}
          checked={this.state.checked}
          onChange={this.toggle}
          disabled={disabled}
        />

        <label
          htmlFor={this.state.id}
          className={styles.label}
        >
          {!frame && this.renderCheckmark()}
          {children}
        </label>
      </span>
    )
  }
}

Checkbox.propTypes = {
  onToggle: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  frame: PropTypes.bool,
}

Checkbox.defaultProps = {
  onToggle: noop => noop,
  checked: false,
  disabled: false,
  color: colors.lightgrey,
  className: '',
  frame: false,
}

export default Checkbox
