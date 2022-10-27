import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = () => {
    const course = useLoaderData();
    console.log(course)
    const { title, image_url, details } = course
    return (

        < Card >
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                {/* <Button variant="primary">Get premium access</Button> */}
            </Card.Body>
        </Card >
    );
};

export default Courses;