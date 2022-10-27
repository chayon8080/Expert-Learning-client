import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const LeftSiteNav = () => {
    const [catagories, setCatagories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/course-catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div>
            <h4>All Catagories</h4>
            {
                catagories.map(catagory => <p key={catagory.id}>
                    <Link to={`/catagory/:${catagory.id}`}>{catagory.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSiteNav;