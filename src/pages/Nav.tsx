import React from 'react'
import { Link } from "react-router-dom"; 

const Nav: React.FC = () => {
	return (<nav>
               <div className="menu-icon">
                  <i className="fa fa-bars fa-2x"></i>
               </div>
               <div className="logo">
                  <a href='/'>
                     <img src="/images/axelLogo.png" width="65px" />
                  </a>
               </div>
               <div className="menu">
                  <ul>
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="/solutions">Solutions</Link>
                     </li>
                     <li>
                        <Link to="/visions">Visions</Link>
                     </li>
                     <li><a href='/'>Sign In</a></li>
                  </ul>
               </div>
            </nav>)
}

export default Nav