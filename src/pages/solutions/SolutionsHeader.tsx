import React from 'react'

const SolutionsHeader: React.FC = () => {

	const header_i = {
		container: {
			background: `url('/images/power.jpg') no-repeat 50% 50%`,
			height: '650px',
			width: '100%',
			position: 'relative',
			backgroundSize: 'cover',
			boxShadow: '0 8px 8px 0 #111212 inset'

		} as React.CSSProperties
	}

	return (
			<div className="container-fluid" style={ header_i.container }>
				<div className="title_s">
					Our Services
				</div>
			</div>
		)
}	

export default SolutionsHeader