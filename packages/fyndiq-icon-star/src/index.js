import React from 'react'
import styles from '../styles.less'

const Star = ({ full, onClick, onHover }) => {
  const starId = Math.random() + ''
  return (
    <svg
      className={styles.star}
      onClick={() => onClick()}
      onMouseOver={() => onHover()}
      viewBox="-5 -5 60 60"
    >
      <defs>
        <clipPath id={starId}>
          <rect x="-5" y="-5" width={60 * full} height="60" />
        </clipPath>
      </defs>
      <path
        className={styles.greystar}
        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
      />
      <path
        className={styles.yellowstar}
        clipPath={`url(#${starId})`}
        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
      />
    </svg>
  )
}

Star.propTypes = {
  full: React.PropTypes.number,
  onClick: React.PropTypes.func,
  onHover: React.PropTypes.func,
}

Star.defaultProps = {
  full: 1,
  onClick: noop => noop,
  onHover: noop => noop,
}

export default Star
