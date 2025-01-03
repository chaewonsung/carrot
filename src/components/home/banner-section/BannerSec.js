import { useEffect, useRef, useState } from 'react';
import Inner from '../../common/layouts/Inner';
import '../../../styles/home/banner-section.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const slides = [
  {
    title: '믿을만한\n이웃 간 중고거래',
    subTitle: '동네 주민들과 가깝고 따뜻한 거래를\n지금 경험해보세요.',
    bgColor: '#FFF1AA',
  },
  {
    title: '동네 이웃들이\n자주 가는 동네 업체',
    subTitle: '우리 동네 사람들이\n이용하는 업체를 찾아보세요.',
    bgColor: '#FFE2D2',
  },
  {
    title: '우리 동네에서 찾는\n당근알바',
    subTitle: '걸어서 10분 거리의\n동네 알바들 여기 다 있어요.',
    bgColor: '#FFE2D2',
  },
  {
    title: '복비 없이 투명한\n부동산 직거래',
    subTitle: '이웃이 살던 집, 당근에서\n편하게 직거래 해보세요.',
    bgColor: '#E3EFF9',
  },
  {
    title: '딜러 수수료 없는\n중고차 직거래',
    subTitle: '딜러 없이 믿고 살 수 있는 중고차,\n당근에서 직거래 해보세요.',
    bgColor: '#DAF4FF',
  },
];

const BannerSec = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const nextSlideRef = useRef(null);
  useEffect(() => {
    if (nextSlideRef.current && !nextSlideRef.current.src)
      nextSlideRef.current.src ||= nextSlideRef.current.dataset.src;
  }, [activeSlideIndex]);
  return (
    <section
      className="bannerSec"
      style={{
        backgroundColor: slides[activeSlideIndex].bgColor,
      }}
    >
      <Inner>
        <div className="bannerSec__content">
          <div className="bannerSec__swiper">
            <Swiper
              speed={600}
              modules={[Pagination, Navigation]}
              pagination={true}
              navigation={true}
              onRealIndexChange={(swiper) =>
                setActiveSlideIndex(swiper.realIndex)
              }
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.title}>
                  <p>{slide.title}</p>
                  <p>{slide.subTitle}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="bannerSec__img">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                ref={i === activeSlideIndex + 1 ? nextSlideRef : null}
                src={i ? null : `images/home_swiper_0${i + 1}.png`}
                data-src={i ? `images/home_swiper_0${i + 1}.png` : null}
                className={i === activeSlideIndex ? 'active' : null}
                alt=""
              ></img>
            ))}
          </div>
        </div>
      </Inner>
    </section>
  );
};

export default BannerSec;
