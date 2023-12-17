import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/logo.png';

export default function Header() {
    return (
            <Navbar expand="lg" className="navigation-wrap sticky-nav" bg='white' sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} className="img-fluid" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className='nav-item'>Home</Nav.Link>
                            <Nav.Link href="#about" className='nav-item'>About Us</Nav.Link>
                            <Nav.Link href="#explore-food" className='nav-item'>Explore Food</Nav.Link>
                            <Nav.Link href="#testimonial" className='nav-item'>Reviews</Nav.Link>
                            <Nav.Link href="#team" className='nav-item'>Team</Nav.Link>
                            <Nav.Link href="#">
                                <button className='main-btn'>1200 345 123</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}
