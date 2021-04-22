// About  Page
import React from 'react';
import Hero from '../components/Hero';
import Vertical from '../components/VerticalTimeline';

const AboutPage = (props) => {
    return (  

        <div>
            {/* Renders the Jumbotron of the page */}
            <Hero title={props.title} background={props.background} />
            <Vertical /> 
        </div>

    );
}
 
export default AboutPage;