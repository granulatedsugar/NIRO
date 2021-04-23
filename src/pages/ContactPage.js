import React from 'react';
import Title from '../components/Title';

const ContactPage = (props) => {
    return (
        <div>
            <Title title={props.title} subTitle={props.subTitle} />
        </div>
    )
}

export default ContactPage;
