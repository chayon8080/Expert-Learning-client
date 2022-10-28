import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../components/Home/Home";
import FAQ from "../../components/FaQ/FAQ";
import Blogs from "../../components/Blog/Blogs";
import Courses from "../../components/catagories/Courses";
import Course from "../../components/Course/Course";
import LogIn from "../../components/LogIn/LogIn/LogIn";
import Register from "../../components/LogIn/Register/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Checkout from "../../components/Checkout/Checkout";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://expert-learning-server.vercel.app/course')
            },
            {
                path: '/catagory/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`https://expert-learning-server.vercel.app/catagories/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <PrivateRoute><Course></Course></PrivateRoute>,
                loader: ({ params }) => fetch(`https://expert-learning-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>

            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])