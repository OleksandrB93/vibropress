import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import homeSlider from '../../data/home.slider.json';
import Slide from './HomeSlide/Slide/Slide';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SlideBox } from './Swiper.styled';
import { Autoplay, Navigation, Pagination } from 'swiper';

export default function Slider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = swiper => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  return (
    <SlideBox>
      <Swiper
        onSlideChangeTransitionEnd={handleSlideChange}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation
        loop
        loopAdditionalSlides={2}
        speed={1000}
        lazy={true}
      >
        {homeSlider.map((homeSlider, index) => (
          <SwiperSlide key={homeSlider.id}>
            <Slide
              homeSlider={homeSlider}
              isActive={activeSlideIndex === index}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </SlideBox>
  );
}
