import styled from '@emotion/styled';

export const SlideBox = styled.div`
  display: flex;
  justify-content: center;

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
        opacity: 1;
      }
    }
  }
`;
