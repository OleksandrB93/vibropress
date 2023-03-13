import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import homeSlider from '../../data/home.slider.json';
import Slide from './HomeSlide/Slide/Slide';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SlideBox } from './Swiper.styled';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper';

export default function Slider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = swiper => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  return (
    <SlideBox>
      <Swiper
        onSlideChangeTransitionEnd={handleSlideChange}
        modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        observer={true}
        grabCursor
        observeParents={true}
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
          <SwiperSlide key={homeSlider.id}>
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
