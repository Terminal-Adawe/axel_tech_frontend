import React from 'react'

const Stats: React.FC = () => {
	return (
			<div className="row">
				<div className="container stats-container">
					<div className="d-flex justify-content-center">
						<div className="stat-box">
							<span className="stat-figure">
								25
							</span>
							<br />
							<span className="stat-title">
								Years of Experience
							</span>
						</div>
						<div className="stat-box">
							<span className="stat-figure">
								10
							</span>
							<br />
							<span className="stat-title">
								Business Partners
							</span>
						</div>
						<div className="stat-box">
							<span className="stat-figure">
								25M
							</span>
							<br />
							<span className="stat-title">
								Products Installed
							</span>
						</div>
						<div className="stat-box">
							<span className="stat-figure">
								22
							</span>
							<br />
							<span className="stat-title">
								Countries World Wide
							</span>
						</div>
						<div className="stat-box">
							<span className="stat-figure">
								5
							</span>
							<br />
							<span className="stat-title">
								Industry Awards
							</span>
						</div>
					</div>
				</div>
				<div className="stat-image mt-4" style={{ background: `url('/images/keyboard.jpg') 50% 50%`}}>
				</div>
			</div>
		)
}

export default Stats