import React, { useState } from "react";
import Anime from "react-anime";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  TextBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from "./HeroElements";

const Hero = (props) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <TextBg>{props.background}</TextBg>
      </HeroBg>
      <HeroContent>
        <Anime opacity={[0, 1]} translateY={"1em"} delay={(e, i) => i * 500}>
          <HeroH1>{props.title}</HeroH1>
          <HeroP>{props.subTitle}</HeroP>
          <HeroBtnWrapper>
            <Button
              href={props.id}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
             {props.buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </Anime>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
