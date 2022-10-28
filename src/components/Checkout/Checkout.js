import React from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const Checkout = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link className='mb-2' eventKey="first"></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='mb-2' eventKey="second">HTML</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='mb-2' eventKey="third">CSS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='mb-2' eventKey="fourth">JAVASRCIPT</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='mb-2' eventKey="fifth">PHP</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='mb-2' eventKey="sixth">MONGO DB</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='mb-2' eventKey="seventh">PYTHON</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane className='mb-2' eventKey="first">
                            <Button className='ms-2'>Weekly</Button>
                            <Button className='ms-2'>Monthly</Button>
                            <Button className='ms-2'>Yearly</Button>
                        </Tab.Pane>
                        <Tab.Pane className='mb-2' eventKey="second">
                            <Button>Weekly</Button>
                            <Button>Monthly</Button>
                            <Button>Yearly</Button>
                        </Tab.Pane>
                        <Tab.Pane className='mb-2' eventKey="third">
                            <Button>Weekly</Button>
                            <Button>Monthly</Button>
                            <Button>Yearly</Button>
                        </Tab.Pane>
                        <Tab.Pane className='mb-2' eventKey="fourth">
                            <Button>Weekly</Button>
                            <Button>Monthly</Button>
                            <Button>Yearly</Button>
                        </Tab.Pane>
                        <Tab.Pane className='mb-2' eventKey="fifth">
                            <Button>Weekly</Button>
                            <Button>Monthly</Button>
                            <Button>Yearly</Button>
                        </Tab.Pane>
                        <Tab.Pane className='mb-2' eventKey="sixth">
                            <Button>Weekly</Button>
                            <Button>Monthly</Button>
                            <Button>Yearly</Button>
                        </Tab.Pane>
                        <Tab.Pane className='mb-2' eventKey="seventh">
                            <Button>Weekly</Button>
                            <Button>Monthly</Button>
                            <Button>Yearly</Button>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default Checkout;