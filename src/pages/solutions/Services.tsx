import React from 'react'
import { Fade } from "react-awesome-reveal"

const Services: React.FC = () => {
	return (
			<div className="row servicesPane">
				<div className='d-flex justify-content-center'>
					<div className="container services">
						<div className="row no-gutters service-pane">
							<div className="col-3 s-col">
								<div className="service-icon-column">
									<div className="centerDiv">
										bingo
									</div>
								</div>
							</div>
							<div className="col-9 s-col">
								<div className="service-info">
									<h2>Payment Aggregation Platform</h2>
									<p>
										Axle Technologies aims to provide a payment aggregation platform that acts as a conduit between third parties and payment instrument providers such as Banks and MNOs through integration. 
									</p>
								</div>
							</div>
						</div>
						<div className="row no-gutters service-pane">
							<div className="col-3 s-col">
								<div className="service-icon-column">
									<div className="centerDiv">
										bingo
									</div>
								</div>
							</div>
							<div className="col-9 s-col">
								<div className="service-info">
									<h2>Axle Talent</h2>
									<p>
										Axle Talent  is a digital platform that matches companies or individuals with high quality, pre-screened and pre-vetted African remote tech talent at a reasonable rate to be hired on a freelance or project basis. 
									</p>
								</div>
							</div>
						</div>
						<div className="row no-gutters services-summary">
							<div className="col-lg-5 col-sm-12 s-col">
								<div className="service-icon-column">
									<div className="fill" style={{ background: `url('/images/spikes.jpg')`, backgroundSize: 'cover' }}>
									</div>
								</div>
							</div>
							<div className="col-lg-7 col-sm-12 s-col">
								<div className="service-desc">
									<div className="service-info">
										Leverage our 20-year expertise in software development, integration, automation and modernizing legacy systems. Our hands on experience, modern tools, state-of-the-art technologies and our ability to think unconventionally provides you with the best solutions to meet all your digital.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
}

export default Services