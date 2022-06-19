import React, { useEffect, useState } from 'react'
import DateDisplay from '../components/DateDisplay'
import HeaderImage from './home/HeaderImage'
import ServicesInfo from './home/ServicesInfo'
import Values from './home/Values'
import Stats from './home/Stats'
import Partners from './home/Partners'


const HomePage: React.FC = () => {

    return (
        <>
            <HeaderImage />
            <div className="container-fluid content-div">
                <ServicesInfo />
                <Values />
                <Stats />
                <Partners />
            </div>
            {/*<DateDisplay />*/}
        </>
    )
}

export default HomePage
