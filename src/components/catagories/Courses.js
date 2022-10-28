import React from 'react';
import { useLoaderData } from 'react-router-dom';

import CourseSummaryCart from '../shared/CourseSummaryCart/CourseSummaryCart';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
            {
                courses.map(course => <CourseSummaryCart
                    key={course._id}
                    course={course}
                ></CourseSummaryCart>)
            }
        </div>
    );
};

export default Courses;