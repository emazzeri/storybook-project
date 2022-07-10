import React from 'react';
import PropTypes from 'prop-types';
import './badge.scss';


export const Badge = ({ color, label, isNew }) => {
  const backgroundIsNew = isNew ? '#abaecc' : '#ffb000';
  const backgroundColor = (typeof(isNew) === "undefined") ? color : backgroundIsNew;

  const style = {
    background: `linear-gradient(
      200.13deg,
      ${backgroundColor} 72.01%,
      rgba(255, 198, 38, 0) 72.37%
    )`,
  }

  return (
      <div className='badge' style={style}>
        { label }
      </div>
  );
};

Badge.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  isNew: PropTypes.bool,
};

Badge.defaultProps = {
  color: '#abaecc',
  label: 'Nuovo',
};
