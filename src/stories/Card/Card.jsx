import React from 'react';
import PropTypes from 'prop-types';
import { StarRating } from '../StarRating/StarRating';
import { Tag } from '../Tag/Tag';
import { Badge } from '../Badge/Badge';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import { Price } from '../Price/Price';
import './card.scss';

function Card({ brand, year, model, description }) {
  return (
    <article className="card">
      <div className='card__container'>
        <div>
          {/* <CardSwiper images={images} isPreferred={isPreferred} isNew={isNew} /> */}
          <Badge isNew={false} />

          <div className='card__specifications'>
            <div className="specification__header">
              <p className="brand">{brand} | {year}</p>
              <StarRating rating={3} opinion_count={8562} />
            </div>

            <h3 className="specification__title">{model}</h3>
            <p className="specification__description">{description}</p>

            <div className="specification__options">
              <Tag nameTag='E-bike' descTag='Corsa' type='dark' separated />
              <Tag nameTag='Taglia' descTag='s m l xl' type='light' />
              <Tag nameTag='Colori' descTag='+4' type='light' />
            </div>

            <Price />
          </div>
        </div>

        <div className="card__footer">
          <Checkbox />
          <Button size='l' label='Scopri' />
        </div>
      </div>
    </article>
  );
}

Card.propTypes = {
  brand: PropTypes.string,
  year: PropTypes.number,
  model: PropTypes.string,
  description: PropTypes.string,
};

Card.defaultProps = {
  brand: 'Cannondale',
  year: 2019,
  model: 'Adventure Neo1EQ',
  description: 'Una bici elettrica ideale per andare al lavoro o per godersi le caratteristiche stradine di campagna',
};

export default Card;