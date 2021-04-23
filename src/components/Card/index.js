import React, { useState } from "react";
import { CardContainer, CardBg, ImageBg, CardContent, CardCategory, CardHeading, ArrowForward,
    ArrowRight, Button } from './CardElements';

const Card = (props) => {

    const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
    return ( 
        
        <CardContainer>
            <CardBg>
                <ImageBg src={props.background}/>
            </CardBg>
            <CardContent>
                <CardCategory>{props.category}</CardCategory>
                <CardHeading>{props.title}</CardHeading>
                <Button
              href={props.link}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              target='_blank'
            >
             View {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
            </CardContent>
        </CardContainer>
     );
}
 
export default Card;