import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaCopyright } from 'react-icons/fa';
const Footer = () => {
    return (
        <Card>
            <Card.Body>
                <p>
                    <small className='text-muted text-sm text-white'><FaCopyright></FaCopyright> All rights reserved to this site Author</small>
                </p>
            </Card.Body>
        </Card>
    );
}
export default Footer;