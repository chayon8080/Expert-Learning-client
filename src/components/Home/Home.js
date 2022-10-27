import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCart from '../shared/CourseSummaryCart/CourseSummaryCart';

const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            {
                allCourses.map(course => <CourseSummaryCart
                    key={course._id}
                    course={course}
                ></CourseSummaryCart>)
            }
        </div>
    );
};

export default Home;