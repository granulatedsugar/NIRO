import React from 'react';
import Title from '../components/Title';
import Carousel from '../components/Carousel'

const WebPage = (props) => {
    return (
        <div>
            <Title title={props.title} subTitle={props.subTitle} />
            <Carousel webApp={props.webApp}/>
        </div>
    )
}

export default WebPage;
