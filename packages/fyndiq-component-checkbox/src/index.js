import React from 'react'
import PropTypes from 'prop-types'
import { Checkmark } from 'fyndiq-icons'
import colors from 'fyndiq-styles-colors'
import styles from '../styles.css'

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checked: !!props.checked }

    this.toggle = this.toggle.bind(this)
  }

  componentDidMount() {
    if (this.props.indeterminate) {
      this.inputWrapper.indeterminate = true
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.checked !== nextProps.checked) {
      this.setState({
        checked: nextProps.checked,
      })
    }

    if (this.props.indeterminate !== nextProps.indeterminate) {
      this.inputWrapper.indeterminate = nextProps.indeterminate
    }
  }

  toggle(e) {
    this.setState({ checked: e.target.checked })
    this.props.onToggle(e.target.checked)
  }

  render() {
    const { children, disabled, className, frame } = this.props

    return (
      <label
        className={`
          ${styles.wrapper}
          ${disabled && styles.wrapperDisabled}
        `}
      >
        <input
          type="checkbox"
          className={`
            ${styles.checkbox}
            ${frame && styles.checkboxFrame}
            ${className}
          `}
          checked={this.state.checked}
          onChange={this.toggle}
          disabled={disabled}
          ref={e => {
            this.inputWrapper = e
          }}
        />

        {!frame && (
          <Checkmark className={styles.checkmark} color={this.props.color} />
        )}

        {children && <span className={styles.label}>{children}</span>}
      </label>
    )
  }
}

Checkbox.propTypes = {
  children: PropTypes.string,
  onToggle: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  frame: PropTypes.bool,
  indeterminate: PropTypes.bool,
}

Checkbox.defaultProps = {
  children: null,
  onToggle: noop => noop,
  checked: false,
  disabled: false,
  color: colors.lightgrey,
  className: '',
  frame: false,
  indeterminate: false,
}

export default Checkbox
