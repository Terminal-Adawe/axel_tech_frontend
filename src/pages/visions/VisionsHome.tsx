import React from 'react'
import Nav from './../Nav'
import Footer from './../Footer'
import VisionsHeader from './VisionsHeader'
import Visions from './Visions'


const VisionsHome: React.FC = () => {
	return (
			<body>
            <Nav />
            <VisionsHeader />
            <div className="container-fluid content-div">
                <Visions />
            </div>
            <Footer />
            {/*<DateDisplay />*/}
        </body>
		)
}

export default VisionsHome