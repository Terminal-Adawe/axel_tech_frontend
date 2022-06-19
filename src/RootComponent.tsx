import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Solutions from './pages/solutions/SolutionsHome'
import VisionsHome from './pages/visions/VisionsHome'
import Nav_ from './pages/Nav'
import Footer from './pages/Footer'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'
import './styles/axleTech.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const RootComponent: React.FC = () => {

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
        <Router>
            <Nav_ scrolled={scrolled}/>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                <Route path={ROUTES.SOLUTIONSPAGE_ROUTE} element={<Solutions />} />
                <Route path={ROUTES.VISIONSPAGE_ROUTE} element={<VisionsHome />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default RootComponent
