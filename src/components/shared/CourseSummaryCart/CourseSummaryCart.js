import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
const CourseSummaryCart = ({ course }) => {
    const { title, image_url } = course;
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={image_url} style={{ height: '500px', width: '100%' }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">See Details</Button>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default CourseSummaryCart;