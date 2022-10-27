import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Catagory from "../../components/catagories/Catagories";
import Home from "../../components/Home/Home";
import FAQ from "../../components/FaQ/FAQ";
import Blogs from "../../components/Blog/Blogs";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('http://localhost:5000/course')
            },
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>,
                // loader: ({ params }) => fetch(`http://localhost:5000/catagory/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>

            },
            {
                path: 'blog',
                element: <Blogs></Blogs>
            }
        ]
    }
])