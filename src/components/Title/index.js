import React from 'react';
import Anime from 'react-anime';
import { TitleContainer, TitleWrapper, TitleH1, TitleP } from './TitleElements';

const Title = (props) => {
    return (
        <TitleContainer>
            <TitleWrapper>
                <Anime opacity={[0, 1]} translateY={"1em"} delay={(e, i) => i * 150}>
                    <TitleH1>{props.title}</TitleH1>
                    <TitleP>{props.subTitle}</TitleP>
                </Anime>
            </TitleWrapper>
        </TitleContainer>
    )
}

export default Title;
