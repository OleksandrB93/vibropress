import React from 'react';
import Slider from 'components/Swiper/Swiper';
import Features from './components/Features/Features';
import  {HomeContainer } from './Home.styled'

export default function Home() {
  return (
    <HomeContainer>
      <Slider />
      <Features/>
    </HomeContainer>
  );
}
