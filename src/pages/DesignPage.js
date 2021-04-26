import React from 'react';
import CarouselMulti from '../components/CarouselMulti';
import Title from '../components/Title';

const DesignPage = (props) => {
    return (
        <div>
            <Title title={props.title} subTitle={props.subTitle} />
            <CarouselMulti/>
        </div>
    )
}

export default DesignPage;
