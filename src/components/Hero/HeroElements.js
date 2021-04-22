import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1000px;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media screen and (max-width: 375px) {
    height: 600px;
  }
`;

export const HeroBg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const TextBg = styled.text`
  position: absolute;
  font-size: 350px;
  font-weight: bold;
  z-index: -1;
  overflow: hidden;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  white-space: nowrap;
  opacity: 0.07;

  @media screen and (max-width: 1450px) {
      font-size: 250px;
  }

  @media screen and (max-width: 1140px) {
      font-size: 150px;
  }

  @media screen and (max-width: 670px) {
      font-size: 80px;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 40px;
  background: transparent;
`;

export const HeroH1 = styled.h1`
  color: #222;
  font-size: 80px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  font-size: 50px;
  text-align: left;
  color: #222;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
