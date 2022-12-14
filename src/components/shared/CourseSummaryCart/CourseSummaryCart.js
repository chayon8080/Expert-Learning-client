import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
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

                    <Link to={`/course/${course._id}`}><Button variant="primary">See Details</Button></Link>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default CourseSummaryCart;