import React from 'react';
import PropTypes from 'prop-types';
import './badge.scss';

export const Badge = ({ isNew, label }) => {
  return (
      <div className={`badge ${isNew ? 'new' : 'used'}`}>
        { label }
      </div>
  );
};

Badge.propTypes = {
  isNew: PropTypes.bool,
  label: PropTypes.string,
};

Badge.defaultProps = {
  isNew: true,
  label: 'Nuovo',
};
