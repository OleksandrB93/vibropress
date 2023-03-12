import styled from '@emotion/styled';
import { SwiperSlide } from 'swiper/react';

export const CooperationContainer = styled.div`
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  /* background-color: #02749e; */
`;

export const CooperationSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d7d7d7;
  border-radius: 15px;

  p {
    text-align: center;
    /* color: #02749e; */
  }
`;
