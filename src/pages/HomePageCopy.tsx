import React, { useEffect, useState } from 'react'
import DateDisplay from '../components/DateDisplay'
import Nav_ from './Nav'
import HeaderImage from './home/HeaderImage'
import ServicesInfo from './home/ServicesInfo'
import Values from './home/Values'
import Stats from './home/Stats'
import Partners from './home/Partners'
import Footer from './Footer'


const HomePage: React.FC = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{

        const container = document.getElementById('container');

        function watchScroll() {
            console.log("initiallized")
            container?.addEventListener("scroll", ()=>handleScroll(container));

            // window.addEventListener("scroll", ()=>console.log("hi"));

            console.log(container)
        }
        watchScroll();
        return () => {
            container?.removeEventListener("scroll", handleScroll);
        };
    },[])

    const handleScroll = (container: any) => {
        console.log("scrolled")
        const offset=container.scrollTop;

        console.log(offset)
        if(offset > 200 ){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }

    return (
        <>
            <Nav_ scrolled={scrolled}/>
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
