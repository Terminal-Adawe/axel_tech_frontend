import React from 'react'

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
					<div>
						<span className="h">The new standard in data analysis</span>
					</div>
					<div className="bt">
						<span className="b">Use Data to Get a 360-Degree View of Your Business</span>
					</div>
					<div>
						<button className="title_b">Learn more</button>
					</div>
				</div>
			</div>
		)
}

export default HeaderImage