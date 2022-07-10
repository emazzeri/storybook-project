import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const Button = ({ backgroundColor, size, label, handleClick, ...props }) => {
  return (
    <button
      type="button"
      className={['btn__card', `font-button-${size}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
      <span className="icon-arrow-right" aria-hidden='true' />
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: '#131313',
  size: 'l',
};
