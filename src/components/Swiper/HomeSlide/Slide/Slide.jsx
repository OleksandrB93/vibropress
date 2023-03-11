import React, { useEffect, useState } from 'react';
import { SlideItem, SlideImg, SlideText } from './Slide.styled';

export default function Slide({ homeSlider, isActive }) {
  const [isTextActive, setIsTextActive] = useState(false);

  useEffect(() => {
    setIsTextActive(isActive);
  }, [isActive]);

  return (
    <SlideItem>
      <SlideImg src={process.env.PUBLIC_URL + homeSlider.imgUrl} alt="name" />
      <SlideText isActive={isTextActive}>
        {isTextActive ? homeSlider.text : homeSlider.inactiveText}
      </SlideText>
    </SlideItem>
  );
}
