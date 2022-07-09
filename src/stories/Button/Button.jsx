import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const Button = ({ backgroundColor, size, label, ...props }) => {
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
  backgroundColor: null,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  size: 'l',
  onClick: undefined,
};
