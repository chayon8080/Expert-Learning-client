import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer/Footer';
import Header from '../components/shared/Header/Header';
import LeftSiteNav from '../components/shared/LeftSiteNav/LeftSiteNav';

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Header></Header>
                    <Col lg="4">
                        <LeftSiteNav></LeftSiteNav>
                    </Col>
                    <Col lg="8">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;