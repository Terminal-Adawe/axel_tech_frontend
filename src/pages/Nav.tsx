import React, { useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import { FaAlignJustify } from 'react-icons/fa'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Nav_: React.FC = () => {
   const navRef = useRef(null)

   // useEffect(() => {
   //       const div = navRef.current
   //       div?.addEventListener('scroll', scroll_spy)

   //      return () => div.removeEventListener('scroll', scroll_spy)
   //  },[div.current])

   // const scroll_spy = () => {
   //    console.log("scrolling...")
   //    console.log(div.current)
   // }

      return (
            <Navbar fixed="top" expand="lg" ref={navRef} >
              <Container>
                <Navbar.Brand href="/">
                   <a href='/'>
                     <img src="/images/axelLogo.png" width="65px" />
                  </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav>
                    <Nav.Link href="#"><Link to="/">Home</Link></Nav.Link>
                     <Nav.Link href="#solutions"><Link to="/solutions">Solutions</Link></Nav.Link>
                     <Nav.Link href="#visions"><Link to="/visions">Visions</Link></Nav.Link>
                     <Nav.Link href="/">Sign In</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
         )
}

export default Nav_