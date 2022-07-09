import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss'

export function Checkbox({ label }) {

  return (
          <div>
            <label>
              <input type="checkbox" />
              <span>{label}</span>
            </label>
          </div>

  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  label: 'Compara',
};