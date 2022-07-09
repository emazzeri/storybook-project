import React from 'react';
import PropTypes from 'prop-types';
import './tag.scss';

export const Tag = ({ nameTag, descTag, type, separated }) => {
  return (<div className={`tag ${type} ${separated ? 'my-16' : ''}`}>
    {nameTag && <span>{nameTag}</span>}
    <span>{descTag}</span>
  </div>);
};

Tag.propTypes = {
  nameTag: PropTypes.string,
  descTag: PropTypes.string,
  type: PropTypes.oneOf(['light', 'dark']),
  separated: PropTypes.bool,
};

Tag.defaultProps = {
  nameTag: 'Name',
  descTag: 'Description',
  type: 'light',
  separated: false,
};