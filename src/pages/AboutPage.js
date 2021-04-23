// About  Page
import React from 'react';
import Hero from '../components/Hero';
import Vertical from '../components/VerticalTimeline';

const AboutPage = (props) => {
    return (  

        <div>
            <Hero title={props.title} background={props.background} buttonLabel={props.buttonLabel} id={props.id}/>
            <Vertical id="timeline" /> 
        </div>

    );
}
 
export default AboutPage;