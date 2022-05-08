import React from 'react'
import Nav from './../Nav'
import HeaderImage from './../home/HeaderImage'
import Footer from './../Footer'
import SolutionsHeader from './SolutionsHeader'
import Services from './Services'

const Solutions: React.FC = () => {
	return (
			<body>
            <Nav />
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