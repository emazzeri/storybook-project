import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { Badge } from '../Badge/Badge';
import '../style/index.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CardSwiper = ({ images, isNew }) => {
  const [isPref, setIsPref] = useState(false);

  return (
    <Swiper
      pagination={{ type: 'progressbar' }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="my-swiper"
      slidesPerView={1}
      loop={true}
      height={230}
    >
      {images?.map((image) =>
        <SwiperSlide key={`image-slide-${image.position}`} style={{ backgroundImage: `url("${image.imageUrl}")` }} />)
      }
      <div className='card__badges-area'>
        <div className='badges'>
          <span className={`icon-heart${isPref ? '' : '-o'}`} aria-hidden='true' onClick={() => setIsPref(!isPref)} />
          <Badge isNew={isNew} label={isNew ? 'Nuovo' : 'Usato'} />
        </div>
      </div>
    </Swiper>
  );
};

CardSwiper.propTypes = {
  images: PropTypes.array,
  isNew: PropTypes.bool,
};

export default CardSwiper;