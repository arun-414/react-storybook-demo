import React from 'react'
import './input.css'
import PropTypes from 'prop-types';

export const Input = ({variant, name, ...props}) => {
  return (
    <div>
      <input className={`input ${variant}`} placeholder={name} {...props}/>
    </div>
  )
}
Input.propTypes = {
    variant: PropTypes.string,
    onChange: PropTypes.func
}
Input.defaultProps = {
    variant: 'standard',
    onChange: undefined
}

