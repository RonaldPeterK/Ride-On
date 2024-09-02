import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import './navBar.css'

function CollapsibleNav() {
    return (
        <Container >
            <Navbar collapseOnSelect expand="lg" data-bs-theme="dark">
                <Container className='fixed-top bg-dark px-4 px-3' >
                    <Navbar.Brand href="/" className='text-danger fs-4 fw-normal'>RideOn</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='my-3'/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-3 gap-3 fw-light text-center">
                            <NavLink className='nav-link p-3 text-secondary fs-6' to="/" active>Home</NavLink>
                            <NavLink className='nav-link p-3 text-secondary fs-6' to="/about">About Us</NavLink>
                            <NavLink className='nav-link p-3 text-secondary fs-6' to="/contact">Contact Us</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink href="#search" className='text-center p-3 ms-3 mt-2 mt-sm-0'><i class="fa-solid fa-magnifying-glass text-white"></i></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
}

export default CollapsibleNav;