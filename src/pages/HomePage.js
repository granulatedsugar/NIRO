import React from 'react'
import Hero from '../components/Hero'

const HomePage = (props) => {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} buttonLabel={props.buttonLabel} background={props.background} />
        </div>
    )
}

export default HomePage;
