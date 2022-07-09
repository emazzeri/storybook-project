import React from 'react';
import PropTypes from 'prop-types';
import './starRating.scss'

export const StarRating = ({ rating, opinion_count }) => {
  return (
    <div className="star-rating">
      {Array(5).fill(null).map((u, i) => {
        return (
          <span key={`star-${i}`} className={`icon-star-full ${i < rating ? 'cl-medium-grey' : 'cl-very-light-grey'}`} aria-hidden='true' />
        );
      })}
      <span className="font-button-s">{opinion_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.oneOf([0,1,2,3,4,5]),
  opinion_count: PropTypes.number,
};