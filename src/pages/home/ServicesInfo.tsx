import React from 'react'

const ServicesInfo: React.FC = () => {
	return (
			<div className='row services-info'>
				<div className='d-flex justify-content-center'>
					<div className="add-board">
						<div className="row no-gutters" style={{ width: '100%', height: '100%', position: 'relative' }}>
							<div className="col-lg-5 col-md-4 col-sm-12 order-lg-1 order-sm-2 board-left-side">
								<div className="centerDiv">
									<h1>Why Axle?</h1>
									Axle Group is a registered Ghanaian based group of companies that offers innovative, agile and convenient  solutions in the technology, delivery and recruitment sectors. Our goal is to enhance efficiency and customer satisfaction.
								</div>
							</div>
							<div className="col-lg-7 col-md-8 col-sm-12 order-lg-2 order-sm-1 board-right-side">
									<div className="row">
										<div className="col-6">
											<div className="tab tab-a tab-a-1 float-end">
												<div className="tab-icon">
												</div>
												<div className="tab-text">
													<h3>Digital Solutions</h3>
													Provides convenient, accessible, affordable and agile digital solutions to help achieve your needs.
												</div>
											</div>
										</div>
										<div className="col-6">
											<div className="tab tab-b tab-b-1">
												<div className="tab-icon">
												</div>
												<div className="tab-text">
													<h3>Talent</h3>
													Offers a top notch recruitment service that  strategically matches  high quality, pre-vetted African tech talent with companies or individuals, on a freelance or project basis. 
												</div>
											</div>
										</div>
									</div>
									<div className="row mt-2">
										<div className="col-6">
											<div className="tab tab-b tab-a-1 float-end">
												<div className="tab-icon">
												</div>
												<div className="tab-text">
													<h3>Talent</h3>
													Offers a top notch recruitment service that  strategically matches  high quality, pre-vetted African tech talent with companies or individuals, on a freelance or project basis. 
												</div>
											</div>
										</div>
										<div className="col-6">
											<div className="tab tab-a tab-b-1">
												<div className="tab-icon">
												</div>
												<div className="tab-text">
													<h3>Digital Solutions</h3>
													Provides convenient, accessible, affordable and agile digital solutions to help achieve your needs.
												</div>
											</div>
										</div>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
}

export default ServicesInfo