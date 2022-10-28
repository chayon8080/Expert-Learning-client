import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Course.css'
const Course = () => {
    const course = useLoaderData();
    const { title, image_url, details } = course
    return (
        < Card className='background'>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to='/checkout'><Button variant="primary">Get premium access</Button></Link>
            </Card.Body>
        </Card >
    );
};

export default Course;