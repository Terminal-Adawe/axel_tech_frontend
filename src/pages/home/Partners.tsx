import React from 'react'

const Partners: React.FC = () => {
	return (
			<div className="row">
				<div className="container-fluid partner-div">
					<div className="row">
						<div className="d-flex justify-content-center">
							<div className="partners-board">
								<div className="row no-gutters" style={{height: '100%'}}>
									<div className="col-lg-2 partner-box">
										<div className="centerDiv">PARTNERS</div>
									</div>
									<div className="col-lg-2 partner-box">
									</div>
									<div className="col-lg-2 partner-box">
									</div>
									<div className="col-lg-2 partner-box">
									</div>
									<div className="col-lg-2 partner-box">
									</div>
									<div className="col-lg-2 partner-box">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="d-flex justify-content-center fill">
							<div className="partners-board-request-service d-flex align-items-stretch">
								<div className="partner-image-div" style={{background: `url('/images/redKeyboard.jpg') 100% 100%`}}>
										<span className="centerDiv">Unprecedented Velocity. Impeccable Reliability.</span>
								</div>
								<div className="partners-text">
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
				</div>
			</div>
		)
}

export default Partners