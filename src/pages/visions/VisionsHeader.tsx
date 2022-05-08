import React from 'react'

const VisionsHeader: React.FC = () => {

	const header_i = {
		container: {
			background: `url('/images/Darktriangle.jpg') no-repeat 50% 50%`,
			height: '650px',
			width: '100%',
			position: 'relative',
			backgroundSize: 'cover',
			boxShadow: '0 8px 8px 0 #111212 inset',
			color: 'white'

		} as React.CSSProperties
	}

	return (
			<div className="container-fluid" style={ header_i.container }>
				<div className="title_v">
					<p><span className="h">Mission</span></p>
					<p>
						To become the number one provider of choice for convenient, accessible, affordable and agile digital solutions to help achieve your needs. 
					</p>
				</div>
			</div>
		)
}	

export default VisionsHeader