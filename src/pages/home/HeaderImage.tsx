import React from 'react'
import { Slide } from "react-awesome-reveal"

const HeaderImage: React.FC = () => {

	const header_i = {
		container: {
			background: `url('/images/largeBuilding.jpg') no-repeat 50% 50%`,
			height: '120vh',
			width: '100%',
			position: 'relative'

		} as React.CSSProperties
	}

	// const title_s = {
	// 	container: {
	// 		display: 'flex', 
	// 		justifyContent: 'center', 
	// 		alignItems: 'center', 
	// 		flexDirection: 'column',

	// 	} as React.CSSProperties
	// }

	return (
			<div className="container-fluid" style={ header_i.container }>
				<div className="title_t">
					<Slide triggerOnce delay={200} direction="left">
						<span className="h">Axle Group</span>
					</Slide>
					<Slide triggerOnce delay={300} direction="right" className="bt">
						<span className="b">
							Innovative, agile and convenient digital products and services 
						</span>
					</Slide>
					<Slide triggerOnce delay={400} direction="up">
						<button className="title_b">Learn more</button>
					</Slide>
				</div>
			</div>
		)
}

export default HeaderImage