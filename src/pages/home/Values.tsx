import React from 'react'

const Values: React.FC = () => {
	return (
			<div className="row values">
				<div className="d-flex justify-content-center fill">
					<div className="values-board d-flex align-items-stretch">
						<div className="value-image-div" style={{background: `url('/images/redPattern.jpg') 100% 100%`}}>
								<span className="centerDiv">Discover unprecedented chambers of innovation</span>
						</div>
						<div className="values-text">
							<span className="centerDiv">
								<p>
								We are a technology solution provider that offers innovative, agile and convenient digital products and services in a structured and systematic way, that enhances efficiency and customer satisfaction.
								</p>
								<p>
									a technology solution provider that offers innovative, agile and convenient digital products and services in a structured and systematic way, that enhances efficiency and customer satisfaction.
								</p>
								<p>
								<button className="title_b">Learn more</button>
								</p>
							</span>
						</div>
					</div>
				</div>
			</div>
		)
}

export default Values