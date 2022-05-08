import React from 'react'
import DateDisplay from '../components/DateDisplay'
import Nav from './Nav'
import HeaderImage from './home/HeaderImage'
import ServicesInfo from './home/ServicesInfo'
import Values from './home/Values'
import Stats from './home/Stats'
import Partners from './home/Partners'
import Footer from './Footer'


const HomePage: React.FC = () => {
    return (
        <body>
            <Nav />
            <HeaderImage />
            <div className="container-fluid content-div">
                <ServicesInfo />
                <Values />
                <Stats />
                <Partners />
            </div>
            <Footer />
            {/*<DateDisplay />*/}
        </body>
    )
}

export default HomePage
