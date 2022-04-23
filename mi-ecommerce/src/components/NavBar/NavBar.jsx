import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './Widget/CartWidget'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
        <NavLink to='/'><h1>Athom Sport Rosario</h1></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <NavDropdown.Item>
                <NavLink to="type/insumo">Pelotas</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="type/prenda">Shorts</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="type/accesorio">Medias</NavLink>
              </NavDropdown.Item>
          </Nav>
          <Nav>
            <NavLink to='cart' className={(isActive) => isActive ? 'active cartIcon':''} >
                <CartWidget/>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

)
}

export default NavBar