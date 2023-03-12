import React from 'react';
import Slider from 'components/Swiper/Swiper';
import Features from './components/Features/Features';
import { HomeContainer } from './Home.styled';
import Cooperation from './components/Cooperation/Cooperation';

export default function Home() {
  return (
    <HomeContainer>
      <Slider />
      <Features />
      <Cooperation />
    </HomeContainer>
  );
}
