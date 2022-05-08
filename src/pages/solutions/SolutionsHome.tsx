import React from 'react'
import Nav_ from './../Nav'
import HeaderImage from './../home/HeaderImage'
import Footer from './../Footer'
import SolutionsHeader from './SolutionsHeader'
import Services from './Services'

const Solutions: React.FC = () => {
	return (
			<body>
            <Nav_ />
            <SolutionsHeader />
            <div className="container-fluid content-div">
                <Services />
            </div>
            <Footer />
            {/*<DateDisplay />*/}
        </body>
		)
}

export default Solutions