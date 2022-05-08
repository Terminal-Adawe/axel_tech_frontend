import React from 'react'
import DateDisplay from '../components/DateDisplay'
import Nav_ from './Nav'
import HeaderImage from './home/HeaderImage'
import ServicesInfo from './home/ServicesInfo'
import Values from './home/Values'
import Stats from './home/Stats'
import Partners from './home/Partners'
import Footer from './Footer'


const HomePage: React.FC = () => {
    return (
        <>
            <Nav_ />
            <HeaderImage />
            <div className="container-fluid content-div">
                <ServicesInfo />
                <Values />
                <Stats />
                <Partners />
            </div>
            <Footer />
            {/*<DateDisplay />*/}
        </>
    )
}

export default HomePage
