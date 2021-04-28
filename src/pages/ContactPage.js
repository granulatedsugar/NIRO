import React from 'react';
import Title from '../components/Title';
import Contact from '../components/Contact';

const ContactPage = (props) => {
    return (
        <div>
            <Title title={props.title} subTitle={props.subTitle} />
            <Contact/>
        </div>
    )
}

export default ContactPage;
