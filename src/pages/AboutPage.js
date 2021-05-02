// About  Page
import React from 'react';
import Title from '../components/Title';
import Vertical from '../components/VerticalTimeline';

const AboutPage = (props) => {
    return (  

        <div>
            <Title title={props.title} subTitle={props.subTitle} />
            <Vertical id="timeline" /> 
        </div>

    );
}
 
export default AboutPage;