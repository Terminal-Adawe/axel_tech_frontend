import React from 'react'
import DateDisplay from '../components/DateDisplay'
import { Link } from "react-router-dom"

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
						<p>+233244224424</p>
						<p>info@axleTech.com</p>
						{/*<p>Box 2043 Oakland street</p>*/}
					</div>
					<div className="col-lg-3 col-md-4 col-sm-12">
						<p><Link to="/">Home</Link></p>
						<p><Link to="/solutions">Solutions</Link></p>
						<p><Link to="/visions">Vision</Link></p>
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