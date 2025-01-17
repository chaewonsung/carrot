import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const MarketItemSwiper = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={true}
      navigation={true}
      lazyPreloadPrevNext={true}
    >
      {[...new Array(5)].map((item, i) => (
        <SwiperSlide key={i}>
          <img
            loading="lazy"
            src={`https://picsum.photos/700?random=${i}`}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MarketItemSwiper;
