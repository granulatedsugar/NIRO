import React, { Component } from 'react';
import Card from '../Card';
import Anime from 'react-anime';
import { CarouselContainer, CarouselWrapper } from './CarouselElements';

class Carousel extends Component {

    constructor(props) {
        super(props);
    }

    makeItem = (webapp) => {
        return webapp.map(webapps => {
            return <Card background={webapps.background} link={webapps.link} title={webapps.title} category={webapps.category} key={webapps.id} />
        })
    }

    render() {
        return (
            <CarouselContainer>
                <CarouselWrapper>
                <Anime opacity={[0, 1]} translateY={"1em"} delay={(e, i) => i * 500}>
                    {this.makeItem(this.props.webApp)}
                    </Anime>
                </CarouselWrapper>
            </CarouselContainer>
        );
    }
}

export default Carousel;