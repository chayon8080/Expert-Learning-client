import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blogs = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Question 1: what is cors?</Accordion.Header>
                <Accordion.Body>
                    Answer: Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Question 2: Why are you using firebase?What other options do you have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                    Answer : Because the Firebase Realtime Database lets us build rich, collaborative applications by allowing secure access to the database directly from client-side code.
                    The other options of authentication is :
                    - Cookie-Based authentication
                    - Token-Based authentication
                    - Third party access(OAuth, API-token)
                    - OpenId
                    - SAML
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Question 3: How does the private route work?</Accordion.Header>
                <Accordion.Body>
                    Answer : PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Question 4: What is Node? How does Node work?</Accordion.Header>
                <Accordion.Body>
                    Answer : Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Node is completely event-driven. Basically the server consists of one thread processing one event after another.A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function. The server then immediately starts to process another event (maybe another request). When the IO operation is finished, that is another kind of event, and the server will process it (i.e. continue working on the request) by executing the callback as soon as it has time.So the server never needs to create additional threads or switch between threads, which means it has very little overhead. If you want to make full use of multiple hardware cores, you just start multiple instances of node.js
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blogs;