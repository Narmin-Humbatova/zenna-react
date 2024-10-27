import React from 'react'
import Pictures from '../components/Pictures'
import Introduction from '../components/Introduction'
import MainCards from '../components/MainCards'
import Happy from '../components/Happy'
import Special from '../components/Special'


const Home: React.FC = () => {
    return (
        <>
            <Pictures />
            <Introduction />
            <MainCards />
            <Happy />
            <Special />
            </>      
    )
}

export default Home