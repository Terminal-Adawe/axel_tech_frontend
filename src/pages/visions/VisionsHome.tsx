import React, { useState, useEffect } from 'react'
import Nav_ from './../Nav'
import Footer from './../Footer'
import VisionsHeader from './VisionsHeader'
import Visions from './Visions'


const VisionsHome: React.FC = () => {
    const [scrolled, setScrolled] = useState(false)

	return (
			<>
            <VisionsHeader />
            <div className="container-fluid content-div">
                <Visions />
            </div>
            {/*<DateDisplay />*/}
        </>
		)
}

export default VisionsHome