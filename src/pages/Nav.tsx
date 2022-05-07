import React from 'react'

const Nav: React.FC = () => {
	return (<nav>
               <div className="menu-icon">
                  <i className="fa fa-bars fa-2x"></i>
               </div>
               <div className="logo">
                  <a href='/'>
                     <img src="/pics/logo_size_invert.jpg" width="65px" />
                  </a>
               </div>
               <div className="menu">
                  <ul>
                     <li><a href='/'>Home</a></li>
                     <li><a href='/'>Solutions</a></li>
                     <li><a href='/'>Visions</a></li>
                     <li><a href='/'>Sign In</a></li>
                  </ul>
               </div>
            </nav>)
}

export default Nav