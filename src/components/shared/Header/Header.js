import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
            <Container>
                <img className='nav-logo' src="https://t4.ftcdn.net/jpg/04/68/51/83/360_F_468518307_E0oIClrNW6zePs06TjVNwBw4HyKHrxzY.jpg" alt="" />
                <Navbar.Brand><Link to='/'>Expert-Learning</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">


                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Home</Nav.Link>
                        <Nav.Link href="#deets">Courses</Nav.Link>
                        <Nav.Link href="#deets">FAQ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;