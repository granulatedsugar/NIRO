import React from 'react'
import Hero from '../components/Hero'

const WebPage = (props) => {
    return (
        <div>
            <Hero title={props.title} background={props.background} />
        </div>
    )
}

export default WebPage;
