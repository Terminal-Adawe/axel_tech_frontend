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
										<span className="centerDiv">Are you ready to accelerate your business needs with technology?</span>
								</div>
								<div className="partners-text">
									<span className="centerDiv">
										<p>
										We envision a future that is driven by technology that offers freedom and flexibility to every demographic. 
										</p>
										<p>
										<button className="title_b">Get Started</button>
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