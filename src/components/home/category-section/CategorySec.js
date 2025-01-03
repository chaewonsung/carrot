import React, { useRef } from 'react';
import Inner from '../../common/layouts/Inner';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../../styles/home/category-section.scss';
import { padStart } from 'lodash';
import { IconSwiperNext, IconSwiperPrev } from '../../common/Icons';
import { Link } from 'react-router-dom';
import { NotTablet } from '../../common/layouts/Responsive';
import { mq } from '../../../lib/styles/variables';

const CategorySec = () => {
  const swiperRef = useRef(null);
  const prevOverlayRef = useRef(null);
  const nextOverlayRef = useRef(null);
  return (
    <section className="categorySec">
      <Inner>
        <div className="categorySec__content">
          <div className="categorySec__header">
            <h2>인기 카테고리</h2>
          </div>
          <div className="categorySec__swiper">
            <Swiper
              slidesPerView="auto"
              slidesPerGroupAuto={true}
              spaceBetween={15}
              speed={800}
              slidesOffsetAfter={16}
              slidesOffsetBefore={16}
              allowTouchMove={true}
              ref={swiperRef}
              onSlideChangeTransitionStart={() => {
                nextOverlayRef.current.classList.remove('hide');
                prevOverlayRef.current.classList.remove('hide');
              }}
              onSlideChangeTransitionEnd={(swiper) => {
                if (swiper.isEnd) nextOverlayRef.current.classList.add('hide');
                else if (swiper.isBeginning)
                  prevOverlayRef.current.classList.add('hide');
              }}
              breakpoints={{
                [mq.tablet]: {
                  allowTouchMove: false,
                  slidesOffsetAfter: 0,
                  slidesOffsetBefore: 0,
                },
              }}
            >
              {[
                '디지털기기',
                '생활가전',
                '가구/인테리어',
                '생활/주방',
                '유아동',
                '유아도서',
                '여성의류',
                '여성잡화',
                '남성패션/잡화',
                '뷰티/미용',
                '스포츠/레저',
                '취미/게임/음반',
                '도서',
                '티켓/교환권',
                '가공식품',
                '건강기능식품',
                '반려동물용품',
                '식물',
                '기타 중고물품',
                '삽니다',
              ].map((item, i) => (
                <SwiperSlide className="swiper__slide" key={item}>
                  <Link>
                    <div className="swiper__imgBox">
                      <img
                        src={`images/home_category_${padStart(
                          i + 1,
                          2,
                          '0'
                        )}.png`}
                        alt=""
                        width="50%"
                        loading="lazy"
                      />
                    </div>
                    <span className="swiper__text">{item}</span>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="swiper-side-overlay swiper-side-overlay--prev hide"
              ref={prevOverlayRef}
            >
              <button
                className="btn-swiper-nav"
                onClick={() => swiperRef?.current.swiper.slidePrev()}
              >
                <IconSwiperPrev $fz="1.3em" />
              </button>
            </div>
            <div
              className="swiper-side-overlay swiper-side-overlay--next"
              ref={nextOverlayRef}
            >
              <button
                className="btn-swiper-nav"
                onClick={() => swiperRef?.current.swiper.slideNext()}
              >
                <IconSwiperNext $fz="1.3em" />
              </button>
            </div>
          </div>
        </div>
      </Inner>
    </section>
  );
};

export default CategorySec;
