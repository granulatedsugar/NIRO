import React from "react";
import Anime from "react-anime";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  Button
} from "./InfoElements";

const InfoSection = (props) => {
  return (
    <>
     <Anime opacity={[0, 1]} translateY={"1em"} delay={(e, i) => i * 500}>
      <InfoContainer className='fluid' lightBg={props.lightBg} id={props.id}>
        <InfoWrapper>
          <InfoRow imgStart={props.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{props.topLine}</TopLine>
                <Heading lightText={props.lightText}>{props.headline}</Heading>
                <SubTitle darkText={props.darkText}>{props.description}</SubTitle>
                <BtnWrap>
                  <Button
                    href={props.link}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    primary={props.primary ? 1 : 0}
                    dark={props.dark ? 1 : 0}
                    dark2={props.dark2 ? 1 : 0}
                    target='_blank'
                  >
                    {props.buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={props.img} alt={props.alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      </Anime>
    </>
  );
};

export default InfoSection;
