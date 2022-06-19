import React, { useState, useEffect } from 'react'
import Nav_ from './../Nav'
import HeaderImage from './../home/HeaderImage'
import Footer from './../Footer'
import SolutionsHeader from './SolutionsHeader'
import Services from './Services'

const Solutions: React.FC = () => {
    const [scrolled, setScrolled] = useState(false)

	return (
			<>
                <SolutionsHeader />
                <div className="container-fluid content-div">
                    <Services />
                </div>
            {/*<DateDisplay />*/}
        </>)
}

export default Solutions