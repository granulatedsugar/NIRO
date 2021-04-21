import React, { useState } from 'react';
import Anime from 'react-anime';
import { HeroContainer, HeroBg, TextBg, HeroContent, HeroH1, HeroP } from './HeroElements';

const Hero = (props) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
      <HeroContainer>
          <HeroBg>
              <TextBg>&#60;hello &#47;&#62;</TextBg>
          </HeroBg>
          <HeroContent>
            <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>
              <HeroH1>I'm Nikko Roque</HeroH1>
              <HeroP>Full-Stack Web Developer</HeroP>
            </Anime>
          </HeroContent>
      </HeroContainer>
    );
}

export default Hero;
