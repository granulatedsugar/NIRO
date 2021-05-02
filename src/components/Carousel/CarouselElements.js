import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  min-height: 60vh;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media screen and (max-width: 450px) {
    min-height: 100vh;
    padding-bottom: 150px;
  }
`;

export const CarouselWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  } ;
`;
