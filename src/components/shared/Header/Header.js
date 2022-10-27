import React from 'react';
import { Button } from 'react-bootstrap';
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
                <Navbar.Brand><p className='text-decoration-none fw-bold text-center font-monospace text-primary ms-3 mt-3'>Expert-Learning</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">


                    </Nav>
                    <Nav>
                        <Link to='/'><Button className='ms-2'>Courses</Button></Link>
                        <Link to='/faq'><Button className='ms-2'>FAQ</Button></Link>
                        <Link to='/blog'><Button className='ms-2'>Blog</Button> </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;