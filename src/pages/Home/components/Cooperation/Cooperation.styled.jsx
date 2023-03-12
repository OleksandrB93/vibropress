import styled from '@emotion/styled';
import { SwiperSlide } from 'swiper/react';

export const Coop = styled.div`
  padding: 80px 20px;

`

export const CoopTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`

export const CooperationContainer = styled.div`
  padding-top: 0;
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
  height: 200px;

  p {
    margin-top: 10px;
    text-align: center;
    /* color: #02749e; */
  }
`;
