import React from 'react';
import PropTypes from 'prop-types';
import { StarRating } from '../StarRating/StarRating';
import { Tag } from '../Tag/Tag';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import { Price } from '../Price/Price';
import CardSwiper from '../CardSwiper.jsx/CardSwiper';
import '../style/index.scss';

function Card({ isNew, rating }) {
  const bike = {
      id: 0,
      brand: "Cannondale",
      model: "Adventure NEO",
      year: 2019,
      description: "Una bici elettrica ideale per andare al lavoro o per godersi le caratteristiche stradine di campagna",
      size: 'S M L XL',
      images: [
        {
          "description": "Image-1",
          "imageUrl": "https://www.bosch-ebike.com/fileadmin/_processed_/8/4/csm_Bosch-eBike-Citybike-Studio-MY2021-right-freigestellt-3_60a04317c9.png?_=1627893255",
          "position": 1,
          "title": "Spree T-Shirt - Grey Small",
        },
        {
          "description": "Image-2",
          "imageUrl": "https://dinamociclo.it/wp-content/uploads/MARATEA-WOMAN-BROWN-350x350.jpg",
          "position": 2,
          "title": "Spree T-Shirt - Grey Small",
        },
        {
          "description": "Image-1",
          "imageUrl": "https://www.ghost-bikes.com/fileadmin/_processed_/4/2/csm_ghost-bikes-e-riot-trail-pro-darkred-orange-45_e77562ff63.png",
          "position": 3,
          "title": "Spree T-Shirt - Grey Small",
        },
        {
          "description": "Image-1",
          "imageUrl": "https://img.remediosdigitales.com/157fe4/ducati-ebike/450_1000.jpg",
          "position": 4,
          "title": "Spree T-Shirt - Grey Small",
        },
      ],
      numberOfColours: '+4',
      categoryType: 'ebike',
      category: "corsa",
      isPreffered: false,
      isNew: false,
      rating: 4,
      opinion_count: 8560,
      currency: '€',
      price: 2855,
      originalPrice: 3526,
    };

  const { brand, model, year, description, size, images,
    numberOfColours, category, isPreferred,
    opinion_count, currency, price, originalPrice } = bike;

  return (
    <article className="card">
      <div className='card__container'>
        <div>
          <CardSwiper images={images} isPreferred={isPreferred} isNew={isNew} />

          <div className='card__specifications'>
            <div className="specification__header">
              <p className="brand">{brand} | {year}</p>
              <StarRating rating={rating} opinion_count={opinion_count} />
            </div>

            <h3 className="specification__title">{model}</h3>
            <p className="specification__description">{description}</p>

            <div className="specification__options">
              <Tag nameTag='E-bike' descTag={category} type='dark' separated />
              <Tag nameTag='Taglia' descTag={size} type='light' />
              <Tag nameTag='Colori' descTag={numberOfColours} type='light' />
            </div>

            <Price currency={currency} price={price} originalPrice={originalPrice} />
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
  isNew: PropTypes.bool,
  rating: PropTypes.oneOf([0,1,2,3,4,5])
};

Card.defaultProps = {
  rating: 3,
};

export default Card;