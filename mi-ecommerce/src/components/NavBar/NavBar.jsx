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
        <NavLink to='/'>Athom Sport Rosario</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Basquet" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Aros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pelotas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Redes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tenis" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Raquetas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pelotas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Redes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Futbol" id="collasible-nav-dropdown">
              <NavLink to="type/insumo">Botines</NavLink>
              <NavLink to="type/accesorio">Pelotas</NavLink>
              <NavLink to="type/complemento">Redes</NavLink>
            </NavDropdown>
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