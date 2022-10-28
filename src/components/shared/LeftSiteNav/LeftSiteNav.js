import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSiteNav.css'
const LeftSiteNav = () => {
    const [catagories, setCatagories] = useState([])
    useEffect(() => {
        fetch('https://expert-learning-server.vercel.app/course-catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div>
            <h4>All Catagories</h4>
            <div>
                {
                    catagories.map(catagory => <p key={catagory.id}>
                        <Link to={`/catagory/${catagory.id}`}><button className='border text-center border-opacity-25 border-2 p-2 text'>{catagory.name}</button></Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSiteNav;