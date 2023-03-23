import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import homeSlider from '../../data/home.slider.json';
import Slide from './HomeSlide/Slide/Slide';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SlideBox } from './Swiper.styled';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper';
import { v4 as uuidv4 } from 'uuid';
const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
    coverflowEffect: {
      rotate: 0,
      stretch: 100,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 15,
      stretch: 150,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
  },
  1024: {
    slidesPerView: 1,
    spaceBetween: 70,
    coverflowEffect: {
      rotate: 15,
      stretch: 400,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
  },
};

export default function Slider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = swiper => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  return (
    <SlideBox>
      <Swiper
        onSlideChangeTransitionEnd={handleSlideChange}
        modules={[Autoplay, Pagination, EffectCoverflow]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        speed={1000}
        breakpoints={breakpoints}
        grabCursor
        slidesPerView={1}
        slidesPerGroup={1}
        effect="coverflow"
        coverflowEffect={{
          rotate: 15,
          stretch: 330,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        // loop={true}
        pagination={{ type: 'bullets', clickable: true, dynamicBullets: true }}
      >
        {homeSlider.map((homeSlider, homeSliderIndex) => (
          <SwiperSlide key={uuidv4()}>
            <Slide
              homeSlider={homeSlider}
              isActive={activeSlideIndex === homeSliderIndex}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </SlideBox>
  );
}
