import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaEnvelope, FaGoogle, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

import './Header.css'
const Header = () => {
    const { user, providerLogIn, logOut } = useContext(AuthContext)
    const googeleProvider = new GoogleAuthProvider()

    const handleGooleSignIn = () => {
        providerLogIn(googeleProvider)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => {
                console.log('error', error)
            })
    }
    const handleLogOut = () => {
        logOut()
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => {
                console.log('error', error)
            })
    }
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
                        <Button onClick={handleGooleSignIn} style={{ height: '40px' }} className='ms-2'><FaGoogle></FaGoogle> Log In</Button>
                        <Nav.Link href="#pricing">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>

                                        <Link to='/login'><Button className='ms-2'><FaEnvelope></FaEnvelope> Log In</Button></Link>
                                        <Link to='/register'><Button className='ms-2'>Register</Button></Link>
                                    </>
                            }</Nav.Link>
                        <Nav.Link className='ms-2'>{user?.photoURL ?
                            <Image style={{ height: '40px' }} rooundedCircle src={user?.photoURL}></Image> : <FaUser></FaUser>
                        }</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;