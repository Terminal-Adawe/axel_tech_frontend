import React from 'react'

const Values: React.FC = () => {
	// style={{background: `url('/images/redPattern.jpg') 100% 100%`}}

	// return (
	// 		<div className="row values">
	// 			<div className="d-flex justify-content-center">
	// 				<div className="values-board">
	// 					<div className="row no-gutters" style={{ width: '100%', height: '100%', position: 'relative' }}>
	// 						<div className="col-lg-6 col-sm-12 values-image-col" >
	// 							<div className="value-image-div">
	// 								<span className="centerDiv v-title">Discover unprecedented chambers of innovation</span>
	// 							</div>
	// 						</div>
	// 						<div className="col-lg-6 col-sm-12">
	// 							<div className="values-text">
	// 								<span className="centerDiv">
	// 									<p>
	// 									We are a technology solution provider that offers innovative, agile and convenient digital products and services in a structured and systematic way, that enhances efficiency and customer satisfaction.
	// 									</p>
	// 									<p>
	// 										a technology solution provider that offers innovative, agile and convenient digital products and services in a structured and systematic way, that enhances efficiency and customer satisfaction.
	// 									</p>
	// 									<p>
	// 										<button className="title_b">Learn more</button>
	// 									</p>
	// 								</span>
	// 							</div>
	// 						</div>
							
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	)

	return (
			<div className="row values justify-content-center">
				<div className="col-md-5 col-sm-12 values-image-col" style={{ background: `url('/images/redPattern.jpg') 100% 100%`, border: `0.5px solid #676c6c` }}>
					<span className="centerDiv"><h1>Discover unprecedented chambers of innovation</h1></span>
				</div>
				<div className="col-md-5 col-sm-12 values-board" >
					<div className="centerDiv values-text">
						<p>
						We are a technology solution provider that offers innovative, agile and convenient digital products and services in a structured and systematic way, that enhances efficiency and customer satisfaction.
						</p>
						<p>
							a technology solution provider that offers innovative, agile and convenient digital products and services in a structured and systematic way, that enhances efficiency and customer satisfaction.
						</p>
						<p>
							<button className="title_b">Learn more</button>
						</p>
					</div>
				</div>
			</div>
		)
}

export default Values