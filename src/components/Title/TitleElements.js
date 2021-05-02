import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    justify-content: left;
    position: relative;
    height: 300px;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    @media screen and (max-width: 540px) {
      height: 250px;
  }
`;

export const TitleWrapper = styled.div`
  z-index: 3;
  max-width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 40px;
  top: 80px;
  background: transparent;

  @media screen and (max-width: 540px) {
      left: 20px;
  }
`;

export const TitleH1 = styled.h1`
  color: #222;
  font-size: 80px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 70px;
  }

  @media screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

export const TitleP = styled.p`
    font-size: 50px;
  text-align: left;
  color: #222;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;