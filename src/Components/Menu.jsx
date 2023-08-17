import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  useNavigate } from 'react-router-dom';

function Menu() {
    const navigate=useNavigate();
  return (
    <Row>
        <Col sm={12} >
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link onClick={()=>navigate('/cars')}>Vehiculos</Nav.Link>
            <Nav.Link onClick={()=>navigate('/nuevo')}>Add Vehiculo</Nav.Link>
            <Nav.Link onClick={()=>navigate('/nuevoUsuario')}>Add Usuario</Nav.Link>
            <Nav.Link onClick={()=>navigate('/usuarios')}>Usuarios</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </Col>
    </Row>
  )
}

export default Menu