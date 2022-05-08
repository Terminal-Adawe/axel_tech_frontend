import React from 'react'
import DateDisplay from '../components/DateDisplay'

const Footer: React.FC = () => {
	return (
		<div className="footer">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-3 col-md-4 col-sm-12">
						<div>
							<a href='/'>
								<img src="/images/axelLogo.png" width="65px" />
							</a>
						</div><br/>
						<p>+233557881327</p>
						<p>axel-tech@axleTech.com</p>
						<p>Box 2043 Oakland street</p>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-12">
						<p><a href='#'>Home</a></p>
						<p><a href='#'>Solutions</a></p>
						<p><a href='#'>Vision</a></p>
						<p><button className="title_b">Learn more</button></p>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-12">
						<p>Subscribe to Our Newsletter</p>
						<p>Email</p>
						<p><input type="text" className="form-control" /></p>
						<p><button className="button_outline">Submit</button></p>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-12">
						<p>Follow Us On:</p>
						<p></p>
						<DateDisplay />
					</div>
				</div>
			</div>
		</div>
		)
}

export default Footer