import React, { useRef } from 'react'
import { Link } from "react-router-dom"
import { FaAlignJustify } from 'react-icons/fa'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

type Props = {
   scrolled: boolean
}


const Nav_: React.FC<Props> = ({scrolled}) => {
   const navRef = useRef(null)

      return (
            <Navbar fixed="top" expand="lg" ref={navRef} className={scrolled==true ? 'scrolled' : ''}>
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