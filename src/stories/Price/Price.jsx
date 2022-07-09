import React from 'react';
import PropTypes from 'prop-types';
import './price.scss'

export function Price({ currency, price, originalPrice }) {
  return (
    <div className="specification__price">
      <span className="price">{currency} {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
      {originalPrice && <span className="original-price">{currency}{originalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>}
    </div>
  );
}

Price.propTypes = {
  currency: PropTypes.string,
  price: PropTypes.number,
  originalPrice: PropTypes.number,
};

Price.defaultProps = {
  currency: '€',
  price: 3256,
  originalPrice: 3568,
};
