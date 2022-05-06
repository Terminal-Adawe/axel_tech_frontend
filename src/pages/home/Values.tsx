import React from 'react'

const Values: React.FC = () => {
	return (
			<div className="row values">
				<div className="d-flex justify-content-center fill">
					<div className="values-board d-flex align-items-stretch">
						<div className="value-image-div" style={{background: `url('/images/redPattern.jpg') 100% 100%`}}>
								<span className="centerDiv">Unprecedented Velocity. Impeccable Reliability.</span>
						</div>
						<div className="values-text">
							<span className="centerDiv">
								<p>
								Im a paragraph. and I am not going to listen to anything that you say	
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