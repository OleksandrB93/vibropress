import styled from '@emotion/styled';

export const SlideBox = styled.div`
  display: flex;
  justify-content: center;

  .swiper-button-next,
  .swiper-button-prev {
    height: 80px;
    width: 40px;
    transform: translateY(-50%);
  }
  .swiper-pagination {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);

    .swiper-pagination-bullet {
      width: 40px;
      height: 40px;
      background-color: #007bff;
      opacity: 0.5;
      border-radius: 50%;
      margin-right: 10px;

      &.swiper-pagination-bullet-active {
        opacity: 0.85;
      }
    }
  }
`;
