import React from 'react';
import { v4 as uuidv4 } from 'uuid';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

import {
  SliderContainer,
  SlideImg,
  Backdrop,
  SliderSlide,
} from './DropSlider.styled';
SwiperCore.use([Navigation]);

export default function DropSlider({handleSlider, dropSlider }) {
  return (
    <div>
      <Backdrop></Backdrop>
      <SliderContainer>
        <Swiper
         navigation={true}
         modules={[Pagination, Navigation]}
          pagination={{
            type: 'bullets',
            clickable: true,
            dynamicBullets: true,
          }}

          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
        >
          {dropSlider.map(dropSlide => (
            <SliderSlide key={uuidv4()}>
              <SwiperSlide>
                <Link to={dropSlide.path} onClick={handleSlider}>
                  <SlideImg
                    src={process.env.PUBLIC_URL + dropSlide.imgUrl}
                    alt="name"
                  />
                  <p>{dropSlide.text}</p>
                </Link>
              </SwiperSlide>
            </SliderSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </SliderContainer>
    </div>
  );
}
