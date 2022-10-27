import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaArrowRight } from 'react-icons/fa';
const FAQ = () => {
    return (
        <div>
            <h2 className='text-bold text-primary'>About our course</h2>
            <h4 className='text-primary'>
                course Info
            </h4>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><FaArrowRight></FaArrowRight>Course Duration</Accordion.Header>
                    <Accordion.Body>
                        Most of the course are aronud 6 month
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><FaArrowRight></FaArrowRight>Course outcome</Accordion.Header>
                    <Accordion.Body>
                        This courses are from beginner to advance. So to get advance skillfull outcome our courses are the best
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><FaArrowRight></FaArrowRight>Self-improvement option</Accordion.Header>
                    <Accordion.Body>
                        Weekly quizs, Assignment,12h support are available for students self-imporment
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;